import { Subscription } from 'rxjs';
import { LocalStorageService } from './../../core/service/local_storage/local-storage.service';
import { AuthModel } from './../../core/model/auth.model';
import { AuthService } from './../../core/service/api/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnDestroy {

  subscription?: Subscription;

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService,
              private router: Router,
              private localStorageService: LocalStorageService) { }


  login(): void{
    this.subscription = this.authService.login(this.profileForm.value)
      .subscribe(
        (data:AuthModel) => {
          this.localStorageService.set("token", data.token);
          this.localStorageService.set("userData",JSON.stringify(data));
        },
        (error) => {
          this.handleError(error.status);
        },
        () => {this.router.navigate(["/charSelect"])});
  }

  handleError(status: number){

  }

  ngOnDestroy(): void {
    if(this.subscription !== null) this.subscription?.unsubscribe();
  }

}
