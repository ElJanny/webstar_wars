import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

export class ParentService{

  protected fullPath!: string
  protected applicantId: string = environment.applicantId;
  constructor(path: string){
    this.fullPath = environment.apiURL + path;
  }
}
