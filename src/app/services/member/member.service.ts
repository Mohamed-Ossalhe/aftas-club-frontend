import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '@app/interfaces/member';
import { environment } from 'environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private _http: HttpClient) { }

  public getAll(page: number, size: number = 1): Observable<Member[]> {
    return this._http.get<Member[]>(`${environment.API_URL}/members?page=${page != 0 ? page - 1 : page}&size=${size}`);
  }
}
