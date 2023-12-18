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
  public getAll(page: number, size: number = 5): Observable<Competition[]> {
    return this._http.get<Competition[]>(`${environment.API_URL}/competitions?page=${page != 0 ? page - 1 : page}&size=${size}`);
  }

  /**
   * 
   * @param body 
   * @returns 
   */
  public create(body: Competition): Observable<Competition> {
    return this._http.post<Competition>(`${environment.API_URL}/competitions/create`, body);
  }

  /**
   * 
   * @param param 
   * @returns 
   */
  public get(param: string): Observable<Competition> {
    return this._http.get<Competition>(`${environment.API_URL}/competitions/${param}`);
  }

}
