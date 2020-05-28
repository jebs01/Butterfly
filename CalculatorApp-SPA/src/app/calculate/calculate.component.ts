import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CalculateService } from '../_services/Calculate.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
  providers: []
})
export class CalculateComponent  {
	public num1:number = 0;
	public num2:number = 0;
	public result:number =  0;
  public resultheading: any;
  public bShowResults: boolean = false;
  
  constructor(private CalculateService: CalculateService) {}

 

	Add() {
    this.bShowResults = true;
    this.resultheading = this.num1 + ' + ' + this.num2;
    this.CalculateService.Add(this.num1, this.num2).subscribe((data)=> this.result = data) ;
    };
 
  Subtract() {
    this.bShowResults = true;
    this.resultheading = this.num1 + ' - ' + this.num2;
    this.CalculateService.Subtract(this.num1, this.num2).subscribe((data)=> this.result = data); 
    };
  
   Multiply()
   { this.bShowResults = true;
    this.resultheading = this.num1 + ' * ' + this.num2;
    this.CalculateService.Multiply(this.num1, this.num2).subscribe((data)=> this.result = data); 
    };
   
    Divide()
      {this.bShowResults = true;
       this.resultheading = this.num1 + ' / ' + this.num2;
       this.CalculateService.Divide(this.num1, this.num2).subscribe((data)=> this.result = data); 
       };   

}