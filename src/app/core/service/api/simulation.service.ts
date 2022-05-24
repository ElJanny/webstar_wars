import { CharacterModel } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParentService } from './parent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulationService extends ParentService {

  private selectedFighters: CharacterModel[] = [];

  constructor(private http: HttpClient) {
    super('/simulate/')
   }

   allowSimulation(darkId: string, lightId: string): Observable<string>{
    const options ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Content-Encoding': 'gzip',
        'Applicant-Id': this.applicantId,
      })
    }
    const payload = {
      "dark": darkId,
      "light": lightId
    }
      return this.http.post<string>(this.fullPath, payload, options);
   }

   setSelectedFighters(lightFighter: CharacterModel, darkFighter: CharacterModel): void {
    if(this.selectedFighters.length==0){
      this.selectedFighters.push(lightFighter);
      this.selectedFighters.push(darkFighter);
    }
    this.selectedFighters[0] = lightFighter;
    this.selectedFighters[1] = darkFighter;
   }

   getSelectedFighters(): CharacterModel[] {
    return this.selectedFighters;
   }

}
