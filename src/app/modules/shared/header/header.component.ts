import { LocalStorageService } from './../../../core/service/local_storage/local-storage.service';
import { Router } from '@angular/router';
 import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userModel: UserModel= {email:"dummy",lastName:"dummy",firstName:"dummy"};

  constructor(private router: Router,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    if(this.localStorageService.get("userData")!=null){
      this.userModel = JSON.parse(this.localStorageService.get("userData")!).user;
    }else{
      this.router.navigate(['/auth']);
    }
  }

  logout():void{
    this.localStorageService.remove("userData","token");
    this.router.navigate(['/auth']);
  }

}
