import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// importuje providera 
import {GithubUsers} from '../../providers/github-users/github-users';

// importuje User model
import {User} from '../../models/user';

// Import User's Details Page
import {UserDetailsPage} from '../user-details/user-details';


@Component({
  templateUrl: 'build/pages/users/users.html',
  
  // Add the GithubUsers provider as part of our page component
  providers: [GithubUsers]
})

export class UsersPage {
	// Declare users as an array of User model
	users: User[];

  // Inject the GithubUsers in the constructor of our page component
  constructor(public nav: NavController, githubUsers: GithubUsers) {
    // Get github users and assign to local user's variable
	// Test if our seach function works
    githubUsers
      //.load()
	  .searchUsers('ganga')
	  .then(users => console.log(users));
	  //.load()
	  // User arrow function notation
      //.then(users => this.users = users);
  }
  
  
  // Navigate to user details page with the login as a parameter  
  goToDetails(event, login) {
    this.nav.push(UserDetailsPage, {
      login: login
    });
  }
}