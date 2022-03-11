import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lavozim } from '../model/lavozim';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class LavozimService {

  private api = environment.baseApi + "/api/lavozim";
  
  constructor(private http: HttpClient) { }

  getAll(key: any): Observable<Page<Lavozim>>{
    return this.http.get<Page<Lavozim>>(this.api, {params: {key: key}});
  }
  create(lavozim: Lavozim): Observable<Lavozim>{
    return this.http.post<Lavozim>(this.api, lavozim);
  }
  update(lavozim: Lavozim): Observable<Lavozim> {
    return this.http.put<Lavozim>(this.api, lavozim);
  }
  deleteById(lavozimId: number): Observable<any>{
    return this.http.delete<Lavozim>(this.api + "/" + lavozimId);
  }
}
