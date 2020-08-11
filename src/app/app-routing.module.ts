import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
{path:'products',component:ProductComponent},
// {path:'category',component:CategoryComponent},// bir baçka sayfayı roout ile content kısmına eklemek istersek bu şekilde kullanım yapabiliriz. 
{path:'',redirectTo:'products',pathMatch:'full'},
{path:'product/category/:categoryID',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
