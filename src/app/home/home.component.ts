import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trendingMovies: any;
  theatreMovies: any;
  popularMovies:any;

  constructor(private http:HttpClient, private route:Router) {

  }

  ngOnInit() {

    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {

    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        console.log(this.trendingMovies);
      });

  }

  getTheatreMovies() {

    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
        console.log(this.theatreMovies);
      });

  }

  getPopularMovies() {

    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
        console.log("Popular Movies");
        console.log(this.popularMovies);
      });

  }

  goToMovies(type:string, id:string) {
    this.route.navigate(['movie',type,id]);
  }

}
