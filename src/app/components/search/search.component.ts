import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  search:string="";

  constructor(public _moviesService:MoviesService,
              private route:ActivatedRoute) 
              {
                this.route.params.subscribe(params => {
                  if(params['text']){
                    this.search= params['text'];
                    this.searchMovie();
                  }
                });
              
              }

  ngOnInit(): void {
  }

  searchMovie(){
    if(this.search.length===0) return;
    this._moviesService.searchMovie(this.search)
        .subscribe()
  }

}
