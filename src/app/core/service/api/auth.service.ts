import { LocalStorageService } from './../local_storage/local-storage.service';
import { AuthModel } from './../../model/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParentService } from './parent';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ParentService{

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
                super('/authentication/');
              }

   getAuthToken(): string | null {
    let token = this.localStorageService.get("token");
    return token;
   }

   login(payload: {username: string, password: string}): Observable<AuthModel> {
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
