import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  baseUrl = "http://localhost:5000/api/Calculate/";
  constructor(private http: HttpClient) {}

Add(number1, number2) :Observable<any> {
  return this.http.post(this.baseUrl + number1 + '/' + number2 + '/Add', {});
}

Subtract(number1, number2) :Observable<any> {
  return this.http.post(this.baseUrl + number1 + '/' + number2 + '/Subtract', {});
}


Multiply(number1, number2) :Observable<any> {
  return this.http.post(this.baseUrl + number1 + '/' + number2 + '/Multiply', {});
}


Divide(number1, number2) :Observable<any> {
  return this.http.post(this.baseUrl + number1 + '/' + number2 + '/Divide', {});
}


}
