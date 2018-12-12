import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  obj:any;

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


   alert(JSON.stringify(array));
  console.log("array in userservice"+email);

  return fetch ("http://127.0.0.1:3000/users/addToPlayList/" + email, {
    method: "POST",
    body: JSON.stringify(array),
    headers: {
      "Content-Type": "application/json"
    }
  })
 }

 retriveUserMusic(email: any)
 {
  console.log(" in retriveUserMusic"+email);
  return fetch ("http://127.0.0.1:3000/users/retriveUserMusic/" + email, {
    method: "GET",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json"
    }
  })

}
editUser(updatedUsername:String,email)
{
  console.log(" in edit user"+email);
  console.log("###"+updatedUsername);

  return fetch ("http://127.0.0.1:3000/users/Profile/editUser/" +email, {
    method: "GET",
    body: JSON.stringify(updatedUsername),
    headers: {
      "Content-Type": "application/json"
    }
  })
}
}

