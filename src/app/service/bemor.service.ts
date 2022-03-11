import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bemor } from '../model/bemor';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class BemorService {
  private api = environment.baseApi + "/api/bemor";
  constructor(private http: HttpClient) { }

  getAll(key: any): Observable<Page<Bemor>> {
    return this.http.get<Page<Bemor>>(this.api, {params: {key: key}});
  }
  create(bemor: Bemor): Observable<any> {
    return this.http.post<Bemor>(this.api, bemor);
  }
  update(bemor: Bemor): Observable<Bemor> {
    return this.http.put<Bemor>(this.api, bemor);
  }
  deleteById(bemorId: number): Observable<any> {
    return this.http.delete<Bemor>(this.api + "/" + bemorId);
  }
}
