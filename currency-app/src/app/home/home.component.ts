import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Rate } from '../rate';
import { CurrencyService } from '../currency.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  endpoint = 'http://data.fixer.io/latest?access_key=a09ee58652dcda275398016195c7b149';

  constructor(private http: HttpClient, private rates: Rate) { }


  ngOnInit(): void {
    this.getData();
  }

  getData() {

    console.log('Hello')
    return this.http.get(this.endpoint).subscribe(
      data => {
        console.log(data)
      }
    )
  }

 


}
