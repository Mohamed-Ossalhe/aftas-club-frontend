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

  /**
   * gets all resources paginated
   * @param page pagination page number
   * @param size elements size to be paginated
   * @returns - {@link Observable}<{@link Member}>
   */
  public getAllPaginated(page: number, size: number = 6): Observable<Member[]> {
    return this._http.get<Member[]>(`${environment.API_URL}/members?page=${page != 0 ? page - 1 : page}&size=${size}`);
  }

  /**
   * gets all resources as array
   * @returns - {@link Observable}<{@link Member}>
   */
  public getAll(): Observable<Member[]> {
    return this._http.get<Member[]>(`${environment.API_URL}/members/all`);
  }
  
  /**
   * 
   * @param body body of type {@link Member}
   * @returns - {@link Observable}<{@link Member}>
   */
  public create(body: Member): Observable<Member> {
    return this._http.post<Member>(`${environment.API_URL}/members/create`, body);
  }
}
