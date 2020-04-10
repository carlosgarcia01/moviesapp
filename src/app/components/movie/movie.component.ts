import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  @Input('movie') movie;

  constructor(public _moviesService:MoviesService,
              private route:ActivatedRoute) 
    {
      this.route.params.subscribe(params => {
        this._moviesService.getMovie(params['id'])
            .subscribe( console.log);
      });
    
    }
  ngOnInit(): void {
  }

}
