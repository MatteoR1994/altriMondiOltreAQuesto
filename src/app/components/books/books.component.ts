import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Author } from 'src/app/model/author';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public authors: Author[] = [];

  constructor(private authorService: AuthorService, public authService: AuthService) { }

  ngOnInit(): void {
    this.authorService.allAuthors$.subscribe((data) => {
      this.authors = data;
    });
  }

  public form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    photoUrl: new FormControl('', [Validators.required])
  });

  get f(){
    return this.form.controls;
  }
  
  saveNewAuthor() {
    const newAuthorObject = this.form.value as Author;
    this.authorService.addNewAuthor(newAuthorObject)
      .then((response) => {
        console.log(response);
        const presenti = this.authorService.allAuthors$.value;
        presenti.push(newAuthorObject);
        this.authorService.allAuthors$.next(presenti);
      });
  }

}