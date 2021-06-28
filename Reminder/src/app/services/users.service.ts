import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  serverUrl = 'http://localhost:8080/'
   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
   requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor(private http: HttpClient) { }

  userRegister(data)
  {
    return this.http.post('http://localhost:8080/api/register', data, this.requestOptions);
  }
}
