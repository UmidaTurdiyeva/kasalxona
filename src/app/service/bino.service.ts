import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bino } from '../model/bino';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class BinoService {
  private api = environment.baseApi + "/api/bino";
  constructor(private http: HttpClient) { }

  getAll(key: any): Observable<Page<Bino>> {
    return this.http.get<Page<Bino>>(this.api,{params: {key: key}});
  }
  create(bino: Bino): Observable<Bino> {
    return this.http.post<Bino>(this.api, bino);
  }
  update(bino: Bino): Observable<Bino> {
    return this.http.put<Bino>(this.api, bino);
  }
  deleteById(binoId: number): Observable<any> {
    return this.http.delete<Bino>(this.api + "/" + binoId);
  }
}
