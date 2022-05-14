import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public _user!: User;

  constructor( private authService : AuthService ) { }

  ngOnInit(): void {
    this._user = this.authService._traeruser;
  }

}
