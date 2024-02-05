import { Component } from '@angular/core';
import { ProdServiceService } from '../prod-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.scss',
  providers:[ProdServiceService],
  //declaration:[ProdTileComponent]
})
export class ProdListComponent {
constructor(private readonly prodservice:ProdServiceService){}
public prod_name_list:string[]=[];
public prod_price_list:number[]=[];
public prod_image_list:string[]=[];
public selectedProdIndex:number|null=null;
public prod_desc_list:string[]=[];
public ngOnInit():void{
this.prod_name_list=this.prodservice.prod_name;
this.prod_price_list=this.prodservice.prod_price;
this.prod_image_list=this.prodservice.prod_img;
this.prod_desc_list=this.prodservice.prod_desc;
}
public showProduct(index : number) : void{
    this.selectedProdIndex = index;
}
}
