import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  path="https://localhost:44305/api/category/getAllCategory"
  constructor(private http:HttpClient) {}
    getCategory():Observable<Category[]>{
      return this.http.get<Category[]>(this.path).pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError))
   }
   handleError(err: HttpErrorResponse){
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
      errorMessage='Bir Hata Oluştu '+err.error.message
    }
    else{
      errorMessage="System error.";
    }
    return throwError(errorMessage);
  };
}
