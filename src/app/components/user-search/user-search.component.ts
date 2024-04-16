import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  username: string = 'username';
  repositories: Repository[] = [];
  error: string = '';

  constructor(private githubService: GithubService) { }

  searchUser(): void {
    // Call GithubService to fetch repositories
    this.githubService.getUserRepositories(this.username, 1, 10) // Assuming you want the first page with 10 repositories
      .subscribe(
        (repos: Repository[]) => { // Type assertion added to ensure repos is of type Repository[]
          // Handle repository data
          this.repositories = repos;
          this.error = ''; // Clear error message
        },
        error => {
          // Handle error
          this.repositories = []; // Clear repositories
          this.error = 'User not found. Please enter a valid GitHub username.'; // Set error message
        }
      );
  }
}
