
import {HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
@Injectable()

export class SearchServices{

    private url1="https://api.github.com/users/";
    private url2="/followers";
    constructor(private http:HttpClient){}

  getSearch(data){
        return this.http.get(this.url1 + data);
        }

  getFollowers(data){
          return this.http.get(this.url1 + data + this.url2);
          }
}