import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competition } from '@interfaces/competition';
import { environment } from 'environments';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private _http: HttpClient) { }

  /**
   * gets all the competitions with pagination
   * @returns `Observable<Competition[]>`
   */
  public getAll(): Observable<Competition[]> {
    return this._http.get<Competition[]>(`${environment.API_URL}/competitions`);
  }

}
