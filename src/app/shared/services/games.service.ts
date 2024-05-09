import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Games } from '../interfaces/games.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly baseUrl: string = 'https://api.rawg.io/api/games';
  private readonly apiKey: string = 'e09e2170271a40da9f64aff144f48504';

  constructor(private readonly http: HttpClient) {}

  getGames(page: number, page_size: number): Observable<Games[]> {
    let requestParams = new HttpParams()
      .set('key', this.apiKey)
      .set('page', page)
      .set('page_size', page_size)
      .set('stores', '2,7');

    return this.http.get<any>(this.baseUrl, { params: requestParams }).pipe(
      map((response) =>
        response.results.map(
          (game: any) =>
            <Games>{
              name: game.name,
              background_image: game.background_image,
              alternative_image: game.short_screenshots[2].image,
            }
        )
      )
    );
  }
}
