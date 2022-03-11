import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../model/page';
import { Xona } from '../model/xona';

@Injectable({
  providedIn: 'root'
})
export class XonaService {

  private api = environment.baseApi + "/api/xona";
  
  constructor(private http: HttpClient) { }

  getAll(key: any): Observable<Page<Xona>>{
    return this.http.get<Page<Xona>>(this.api,{params: {key: key}});
  }
  create(xona: Xona): Observable<Xona>{
    return this.http.post<Xona>(this.api, xona);
  }
  update(xona: Xona): Observable<Xona> {
    return this.http.put<Xona>(this.api, xona);
  }
  deleteById(xonaId: number): Observable<any>{
    return this.http.delete<Xona>(this.api + "/" + xonaId);
  }
}
