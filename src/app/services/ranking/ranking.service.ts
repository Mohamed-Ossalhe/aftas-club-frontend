import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ranking } from '@app/interfaces/ranking';
import { environment } from 'environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private __http: HttpClient) { }

  /**
   * create a new resource
   * @param body {@link Ranking}
   * @returns -{@link Observable}<{@link Ranking}>
   */
  public create(body: Ranking): Observable<Ranking> {
    return this.__http.post<Ranking>(`${environment.API_URL}/rankings/create`, body);
  }
}
