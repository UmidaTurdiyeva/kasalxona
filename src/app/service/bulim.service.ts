import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bulim } from '../model/bulim';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class BulimService {
  private api = environment.baseApi + "/api/bulim";

  constructor(private http: HttpClient) { }

  getAll(key: any): Observable <Page<Bulim>> {
    return this.http.get<Page<Bulim>>(this.api, {params: {key: key}});
  }
  create(bulim: Bulim): Observable<any> {
    return this.http.post<Bulim>(this.api, bulim);
  }
  update(bulim: Bulim): Observable<any> {
    return this.http.put<Bulim>(this.api, bulim);
  }
  deleteById(bulimId: number): Observable<any> {
    return this.http.delete<Bulim>(this.api + "/" + bulimId);
  }

}
