import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['../app.component.css','./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cakeDetail: any;
  constructor() { }

  ngOnInit() {
  }

}
