import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  

   movieURL = "http://localhost:8082/api/movie";
   userURL = "http://localhost:8081/api/auth";


  constructor() { }

  getAllMovies(): any{

    return (`${this.movieURL}/getAllMovies`);
  }

  login(): any{

    return (`${this.userURL}/login`);
  }

  searchMovies(queryParams: { title: string;
     genre: string; actors: string; minRating: number; 
     releaseYear: number; }): any {
      const queryString = this.getSearchQueryString(queryParams);
    return (`${this.movieURL}/searchMovies?${queryString}`);
  }
  getSearchQueryString(params: any): string {
    const queryStrings: string[] = [];
    for (const key in params) {
      if (params[key]) {
        queryStrings.push(`${key}=${encodeURIComponent(params[key])}`);
      }
    }
    return queryStrings.join('&');
  }

  deleteMovie(title: string): any {
    return (`${this.movieURL}/deleteMovieByTitle/${title}`)
  }

  updateSubscribe(): any{
    return (`${this.userURL}/updateUserDetails`);
  }
}

