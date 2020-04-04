import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string="https://sensortest.herokuapp.com/api/";

  constructor(private http:HttpClient) { }


  login(data:any){
    let headers=this.createHeaders();
    return this.http.post(`${this.url}/users/authenticate`,data,{headers:headers});

  }

  private createHeaders(){
    let token:string="Bearer ";
    let header = new HttpHeaders({
      "Authorization": "Bearer "+ token,
      "Content-Type" : "application/json"
    });

    return header;
  }
}
