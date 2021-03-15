import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FmdbService {

  login: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(private http: HttpClient) { }

   


  getDatabases():Observable<any>{
    return this.http.get('https://192.168.10.62/fmi/data/v1/databases');
  }

  getToken(dbName):Observable<any>{
    let headers= new HttpHeaders().set('Authorization', `basic ${btoa(environment[`${dbName}`].cred)}`);
    return this.http.post(`https://192.168.10.62/fmi/data/v1/databases/${dbName}/sessions`,{},{headers: headers});
  }

  getLayout(dbName,token):Observable<any>{
    let headers= new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://192.168.10.62/fmi/data/v1/databases/${dbName}/layouts`,{headers: headers});
  }

  getScripts(dbName,token):Observable<any>{
    let headers= new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://192.168.10.62/fmi/data/v1/databases/${dbName}/scripts`,{headers: headers});
  }

  getLayoutMetadata(dbName,layout,token):Observable<any>{
    let headers= new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://192.168.10.62/fmi/data/v1/databases/${dbName}/layouts/${layout}`, {headers: headers});
  }
}
