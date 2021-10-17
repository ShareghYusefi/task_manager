import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photo:string = 'data:image/jpeg;base64,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';
  constructor() { }

  ngOnInit(): void {
  }

}
