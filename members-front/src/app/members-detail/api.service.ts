import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'api-rest/drf/members/' + id + '/', {headers: this.httpHeaders});
  };
}
