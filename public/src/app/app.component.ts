import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private _httpService: HttpService,
    private titleService: Title,
  ) {}

  public newCake: any;
  public cakes: any;
  public cakeDetail: any;
  public cakeSel: any;
  

  ngOnInit(){
    this.titleService.setTitle("Cake Rater");
    this.newCake = { name: "", url: ""};
    this.getCakes();
  }

  submitCake(){
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      this.newCake = { name: "", url: ""};
      this.getCakes();
    });
  }

  getCakes(){
    let observable = this._httpService.getCakes();
    observable.subscribe((data: any) => {
      this.cakes = data.reverse();
    });
  }

  seeDetail(cake){
    this.cakeSel = cake;
    let sum = 0;
    this.cakeSel["avg"] = 0;
    for (let comment of cake.comments){
      sum += comment.rating;
    }
    this.cakeSel["avg"] = sum / cake.comments.length;
    this.cakeSel.comments.reverse();
  }

  submitComment(Rating, cake){
    let observable = this._httpService.createComment(Rating);
    observable.subscribe(data => {
      this.updateCakeById(cake, data);
    });
  }

  updateCakeById(cake, comment){
    let observable = this._httpService.updateCake(cake, comment);
    observable.subscribe((data: any) => {
      this.ngOnInit();
    });
  }
}