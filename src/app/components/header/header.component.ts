import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Employeee'

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    console.log('Another one')
  }

}
