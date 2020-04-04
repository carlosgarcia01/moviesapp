import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  login:boolean=false;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(page:string){
    this.router.navigate([`/${page}`]);
  }


  searchMovie(text:string){
    if(text.length===0) return;
    this.router.navigate(['/search',text]); 
  }
}
