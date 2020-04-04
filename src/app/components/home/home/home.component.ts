import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../../providers/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  billboard:any[]=[];
  premieres:any[]=[];
  infantile:any[]=[];

  constructor(private _movieService:MoviesService) {
    this._movieService.getBillboard()
        .subscribe(data=>this.billboard=data);

    this._movieService.getPremieres()
        .subscribe(data=>this.premieres=data);

    this._movieService.getInfantile()
        .subscribe(data=>this.infantile=data);
   }

  ngOnInit(): void {
  }



}
