import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/user-details/user-details.html',
})
export class UserDetailsPage {
	login: string;

  constructor(public nav: NavController, navParams: NavParams) {
	// Retrieve the login from the navigation parameters
    this.login = navParams.get('login');
  }
}
