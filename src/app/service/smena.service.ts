import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../model/page';
import { Smena } from '../model/smena';

@Injectable({
  providedIn: 'root'
})
export class SmenaService {

  private api = environment.baseApi + "/api/smena";
  
  constructor(private http: HttpClient) { }

  getAll(key: any): Observable<Page<Smena>> {
    return this.http.get<Page<Smena>>(this.api, {params: {key: key}});
  }
  create(smena: Smena): Observable<Smena> {
    return this.http.post<Smena> (this.api, smena);
  }
  update(smena: Smena): Observable<Smena> {
    return this.http.put<Smena> (this.api, smena);
  }
  deleteById(smenaId: number): Observable<any> {
    return this.http.delete<Smena>(this.api + "/" + smenaId);
  }
}
