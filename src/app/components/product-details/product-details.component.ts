import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  category: string = ''; // Category name from the route
  productId: number = 0; // Product ID from the route
  product: any; // Holds the retrieved product

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    // Get category and productId from route parameters
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.productId = +params.get('id')!;

      // Call service method to get product by category and ID
      this.product = this.productsService.getProductByCategoryAndId(this.category, this.productId);
      console.log(this.product);
    });
  }
}
