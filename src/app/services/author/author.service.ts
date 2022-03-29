import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
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

  // getAll(): AngularFirestoreCollection<Author> {
  //   return this.tutorialsRef;
  // }

  getAllAuthors() {
    this.tutorialsRef.get().subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.authors.push(doc.data());
      });
    });    
    this.allAuthors$.next(this.authors);
  }

}
