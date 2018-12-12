import { Component} from '@angular/core';
import {SearchServices} from './search.services';
import {Search} from '../search.interface'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  srch;
  user;
  users;
  constructor(private searchServices:SearchServices) { }

  Search(data) {
  
    this.searchServices.getSearch(data).subscribe( data =>{
      this.user=data;
      console.log(data);
    })

    this.searchServices.getFollowers(data).subscribe( data =>{
      this.users=data;
      console.log(data);
    })
  }

}
