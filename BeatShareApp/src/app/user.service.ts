import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

//rest api call
  register(body:any){
    return this._http.post('http://127.0.0.1:3000/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  //rest api call
  login(body:any){
    return this._http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  //rest api call
  user(){
    return this._http.get('http://127.0.0.1:3000/users/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  logout(){
    return this._http.get('http://127.0.0.1:3000/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  getNewsFeed()
  {
    return this._http.get('http://127.0.0.1:3000/users/getNewsFeed',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  addToPlayList(array:any, email)
 {
  //  debugger
  console.log("array in userservice"+email);

  return fetch ("http://127.0.0.1:3000/users/addToPlayList/" + email, {
    method: "POST",
    body: JSON.stringify(array),
    headers: {
      "Content-Type": "application/json"
    }
  })
 }
}



  //  return this._http.post('http://127.0.0.1:3000/users/addToPlayList', array,{
  //    observe:'body',

  //   //  headers:new HttpHeaders().append('Content-Type','application/json')
  //  });
