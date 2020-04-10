import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  private url:string ="https://image.tmdb.org/t/p/w500";

  transform(movie:any,poster:boolean=false):any {
    if(poster && movie)
    return this.url+movie.poster_path;

    if(!movie)
    return `assets/img/no-image.png`;
    else{
      if(movie.backdrop_path)
      return this.url+movie.backdrop_path;
    else if(movie.poster_path)
      return this.url+movie.poster_path;
      else
        return `assets/img/no-image.png`;
    }
    
  }
}
