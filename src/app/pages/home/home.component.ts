import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GamesService } from '../../shared/services/games.service';
import { Observable, of } from 'rxjs';
import { Games } from '../../shared/interfaces/games.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pageSize: number;
  nextPage: number;

  loading$!: Observable<boolean>;
  games$!: Observable<Games[]>;

  constructor(private readonly gamesService: GamesService) {
    this.pageSize = 25;
    this.nextPage = 1;
  }

  ngOnInit(): void {
    this.getGamesObservable(this.nextPage);
  }

  handlePageEvent(event: PageEvent): void {
    const previousPage = event.previousPageIndex ? event.previousPageIndex : 0;

    if (event.pageIndex > previousPage) {
      this.nextPage++;
    } else {
      this.nextPage--;
    }
    console.log(`Next Page: ${this.nextPage}`);
    this.getGamesObservable(this.nextPage);
  }

  private getGamesObservable(page: number) {
    this.loading$ = of(true);
    this.games$ = this.gamesService.getGames(page, this.pageSize);
    this.loading$ = of(false);
  }
}
