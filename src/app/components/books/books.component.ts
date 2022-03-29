import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/services/author/author.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public authors: Author[] = [];

  public myArray: Author[] = [];

  constructor(private authorService: AuthorService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // this.authorService.tutorialsRef.get().subscribe((ss) => {
    //   ss.docs.forEach((doc) => {
    //     this.authors.push(doc.data());
    //   });
    // });
    // console.log(this.authors);
    this.authorService.allAuthors$.subscribe((data) => {
      this.authors = data;
    });
  }

}