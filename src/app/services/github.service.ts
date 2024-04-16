// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Repository } from '../models/repository.model';
// @Injectable({
//   providedIn: 'root'
// })
// export class GithubService {
//   private baseUrl = 'https://api.github.com';
//   constructor() { }
//    getUserRepositories(username: string, page: number, pageSize: number): Observable<Repository[]> {
//     const url = `${this.baseUrl}/users/${username}/repos?page=${page}&per_page=${pageSize}`;
//     return this.http.get<any[]>(url).pipe(
//       map(repos => {
//         return repos.map(repo => ({
//           name: repo.name,
//           description: repo.description,
//           language: repo.language,
//           topics: repo.topics,
//           // Add more properties if needed
//         }));
//       })
//     );
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserRepositories(username: string, page: number, pageSize: number): Observable<Repository[]> {
    const url = `${this.baseUrl}/users/${username}/repos?page=${page}&per_page=${pageSize}`;
    return this.http.get<any[]>(url).pipe(
      map(repos => {
        return repos.map(repo => ({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          topics: repo.topics,
          // Add more properties if needed
        }));
      })
    );
  }
}
