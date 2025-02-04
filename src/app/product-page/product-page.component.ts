import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  private albumInfo;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response =>
      this.albumInfo = response)
  }

}
