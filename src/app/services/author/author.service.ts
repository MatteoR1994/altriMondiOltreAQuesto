import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Author } from 'src/app/model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private dbPath = 'authors';

  public tutorialsRef: AngularFirestoreCollection<Author>;

  public allAuthors$ = new BehaviorSubject<Author[]>([]);

  public authors: Author[] = [];

  constructor(private db: AngularFirestore) { 
    this.tutorialsRef = this.db.collection(this.dbPath);
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.tutorialsRef.get().subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.authors.push(doc.data());
      });
    });  
    this.allAuthors$.next(this.authors);
  }

  addNewAuthor(newAuthor: any): Promise<DocumentReference<any>> {
    return this.db.collection('authors').add({
      name: newAuthor.name,
      surname: newAuthor.surname,
      nationality: newAuthor.nationality,
      photoUrl: newAuthor.photoUrl
    });
  }

}
