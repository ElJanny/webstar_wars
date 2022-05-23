import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParentService } from './parent';
import { CharacterModel } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends ParentService {

  constructor(private http: HttpClient) {
    super("/characters/");
  }

  getAllCharacter(): Observable<{characters: CharacterModel[]}>{
    const options ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Content-Encoding': 'gzip',
        'Applicant-Id': this.applicantId,
      })
    }
    return this.http.get<{characters: CharacterModel[]}>(this.fullPath,options);
  }

}
