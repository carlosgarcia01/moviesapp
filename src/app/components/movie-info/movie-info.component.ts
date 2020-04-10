import {
  Component,
  OnInit
} from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  movie:any;
  goBack:String="";

  constructor(public _moviesService: MoviesService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.goBack=params['page'];
      this._moviesService.getMovie(params['id'])
        .subscribe(res => this.movie=res);
    });

  }

  ngOnInit(): void {}

}
