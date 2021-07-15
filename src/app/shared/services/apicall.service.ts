import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  private apiEndPoint: string = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http: HttpClient) { }
  public freeApiMethod() {
    return this.http.get(this.apiEndPoint);
  }
}
