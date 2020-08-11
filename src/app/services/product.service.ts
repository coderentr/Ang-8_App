import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  path="https://localhost:44305/api/products/getall";

  constructor(private http: HttpClient) { }
  getProducts(categoryID):Observable<Product[]> {
    //bırada benim servisimdeki methot ?categoryID yi desteklemiyor. Bu yüzden farklı bir yöntem denemem gerek. Get by category metodu denenebilir.
   return this.http.get<Product[]>(this.path+'?categoryID='+categoryID).pipe(
     tap(data=>console.log(JSON.stringify(data))),
     catchError(this.handleError)
   )
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
