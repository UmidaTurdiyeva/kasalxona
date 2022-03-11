import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../model/page';
import { Xodim } from '../model/xodim';

@Injectable({
  providedIn: 'root'
})
export class XodimService {

  private api = environment.baseApi + "/api/xodim";

  constructor(private http: HttpClient) { }

  getAll(key: any): Observable<Page<Xodim>> {
    return this.http.get<Page<Xodim>>(this.api, {params: {key: key}} );
  }
  
  create(xodim: Xodim): Observable<Xodim> {
    return this.http.post<Xodim>(this.api, xodim);
  }

  update(xodim: Xodim): Observable<Xodim> {
    return this.http.put<Xodim>(this.api, xodim);
  }

  deleteById(xodimId: number): Observable<any> {
    return this.http.delete<Xodim>(this.api + "/" + xodimId);
  }
}
