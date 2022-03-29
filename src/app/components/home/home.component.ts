import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { ComService } from 'src/app/services/com/com.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened: boolean = false;

  // books: Book[] = [
  //   { id: 1, title: 'Carrie', author: 'Stephen King', year: 1974 },
  //   { id: 2, title: 'Le notti di Salem', author: 'Stephen King', year: 1975 },
  //   { id: 3, title: 'Shining', author: 'Stephen King', year: 1977 },
  //   { id: 4, title: 'Ossessione', author: 'Stephen King', year: 1977 },
  //   { id: 5, title: 'La lunga marcia', author: 'Stephen King', year: 1979 },
  //   { id: 6, title: 'Cujo', author: 'Stephen King', year: 1981 },
  //   { id: 7, title: 'Christine', author: 'Stephen King', year: 1983 },
  //   { id: 8, title: 'IT', author: 'Stephen King', year: 1986 },
  //   { id: 9, title: 'Misery', author: 'Stephen King', year: 1987 },
  //   { id: 10, title: 'Il Miglio verde', author: 'Stephen King', year:1996  },
  // ];

  books: object[] = [
    { id: 1, title: 'Carrie', author: 'Stephen King', year: 1974 },
    { id: 2, title: 'Le notti di Salem', author: 'Stephen King', year: 1975 },
    { id: 3, title: 'Shining', author: 'Stephen King', year: 1977 },
    { id: 4, title: 'Ossessione', author: 'Stephen King', year: 1977 },
    { id: 5, title: 'La lunga marcia', author: 'Stephen King', year: 1979 },
    { id: 6, title: 'Cujo', author: 'Stephen King', year: 1981 },
    { id: 7, title: 'Christine', author: 'Stephen King', year: 1983 },
    { id: 8, title: 'IT', author: 'Stephen King', year: 1986 },
    { id: 9, title: 'Misery', author: 'Stephen King', year: 1987 },
    { id: 10, title: 'Il Miglio verde', author: 'Stephen King', year:1996  },
  ];

  public displayedColumns: string[] = ['id', 'title', 'author', 'year'];
  // public dataSource: Book[] = this.books;
  public dataSource: object[] = this.books;

  constructor(private comS: ComService) { }

  ngOnInit(): void {
    this.comS.isDrawerOpen.subscribe(isOpen => {
      this.opened = isOpen;      
    });
  }

}
