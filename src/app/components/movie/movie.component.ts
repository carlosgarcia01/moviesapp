import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  @Input('movie') movie;

  constructor() { }

  ngOnInit(): void {
  }

}
