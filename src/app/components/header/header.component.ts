import { Component, OnInit } from '@angular/core';
import { ComService } from 'src/app/services/com/com.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private comS: ComService) { }

  ngOnInit(): void {
  }

  menuClicked(): void {
    this.comS.isDrawerOpen.next(!this.comS.isDrawerOpen.value);
  }

}
