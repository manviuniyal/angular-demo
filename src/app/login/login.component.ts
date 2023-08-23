import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:string='';
  password:string=''; 
  error:string=''; 

  constructor(private auth:AuthService, private router:Router) {

  }


  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  login(): void {

    if (this.username?.trim().length===0) {

      this.error="Username is required";
      
    } else if(this.password?.trim().length===0) {

      this.error="Password is required";
      
    } else {
      this.error="";
      let res=this.auth.login(this.username,this.password);

      if(res==200) {
        this.router.navigate(['home']);
      } else {
        this.error="Invalid";
      }
    }
  }
}
