import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MyHttpService {

  apiBase = environment.apiBase;

  // headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  // headers = new HttpHeaders({'Content-Type': 'application/json'});
  getParams = new HttpParams().set('plant_id', '2');

  constructor(private http: HttpClient) {
  }

  // http request
  queryLists() {
    return this.http.request('get', this.apiBase + '/v1/plant/data', {
      params: this.getParams
    });
  }

}
