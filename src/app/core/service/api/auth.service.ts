import { AuthModel } from './../../model/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParentService } from './parent';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ParentService{

  constructor(private http: HttpClient) {
    super('/authentication/');
   }

   login(payload: {username: string, password: string}): Observable<AuthModel>{ //TODO
      const options ={
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          //'Content-Encoding': 'gzip',
          'Applicant-Id': this.applicantId,
        })
      }
      return this.http.post<AuthModel>(this.fullPath, payload, options);
   }

}
