import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  repositories: any[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    // Call GithubService to fetch repositories
    this.githubService.getUserRepositories('username', 1, 10) // Example: Fetching first page with 10 repositories
      .subscribe(
        repos => {
          this.repositories = repos;
        },
        error => {
          // Handle error
        }
      );
  }
}
