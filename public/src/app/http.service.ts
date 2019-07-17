import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // dependency injection

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { }
  
  addCake(newCake){ return this._http.post("/cakes", newCake); }
  getCakes(){ return this._http.get("/cakes"); }
  createComment(newComment){ return this._http.post("/comment", newComment); }
  updateCake(cake, comment){ return this._http.put(`/cakes/${cake._id}`, comment); }
}
