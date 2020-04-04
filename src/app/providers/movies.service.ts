import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlMoviedb: string = "https://api.themoviedb.org/3/";
  private api_key: string = "b45b4e23675a94398399202d0539963b";
  movies:any[]=[];

  constructor(private http: HttpClient) { }

  getBillboard() {
    let start = new Date();
    let end = new Date();
    end.setDate(end.getDate() + 7);

    let startStr: string = start.toISOString().substring(0, 10);
    let endStr: string = end.toISOString().substring(0, 10);
    let url = `${this.urlMoviedb}discover/movie?primary_release_date.gte=${startStr}&primary_release_date.lte=${endStr}&api_key=${this.api_key}&language=es`;

    return this.http.get(url)
      .pipe(
        map((res: any) => res.results)
      );
  }

  getPremieres() {
    let url = `${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.api_key}&language=es`;
    return this.http.get(url)
      .pipe(
        map((res: any) => res.results)
      );
    //"https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US"
  }

  getInfantile(){
    let url = `${this.urlMoviedb}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.api_key}&language=es`;
    return this.http.get(url)
      .pipe(
        map((res: any) => res.results)
      );
    
  }

  searchMovie(text: string) {
    let url = `${this.urlMoviedb}search/movie?query=${text}&sort_by=popularity.desc
            &api_key=${this.api_key}&language=es`;
    return this.http.get(url)
      .pipe(
        map((res: any) => {
          this.movies=res.results; 
          console.log(this.movies) 
          return res.results;
        })
      );

  }



  private createHeaders() {
    let token: string = "Bearer ";
    let header = new HttpHeaders({
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    });

    return header;
  }
}
