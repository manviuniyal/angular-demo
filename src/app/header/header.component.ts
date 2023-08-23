import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route:Router, private auth:AuthService) {

  }

  home() {
    this.route.navigate(['home']);
  }

  logout() {

    this.auth.logout();

  }

}
