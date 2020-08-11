import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  name = "Phone"
  constructor(
    private alertifyService: AlertifyService,
     private productService:ProductService,
     private activatedRoute:ActivatedRoute
     ) { }
  title = "ÜRÜNLERİMİZ"
  filterText = ""
  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(param=>{
      this.productService.getProducts(param['categoryID']).subscribe(data=>this.products=data)
    })
  }
  AddToCart(product) {
    this.alertifyService.success(product.productName + " eklendi")
  }
}
