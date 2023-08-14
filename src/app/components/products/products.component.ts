import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  shredders: { id: number; name: string; description: string; carouselImgs: string[] }[] = [];
  twoInchA4Files: { id: number; name: string; carouselImgs: string[] }[] = [];
  twoInchFCFiles: { id: number; name: string; carouselImgs: string[] }[] = [];
  threeInchA4Files: { id: number; name: string; carouselImgs: string[] }[] = [];
  threeInchFCFiles: { id: number; name: string; carouselImgs: string[] }[] = [];
  threeInchA4MarbleFiles: { id: number; name: string; carouselImgs: string[] }[] = [];
  threeInchFCMarbleFiles: { id: number; name: string; carouselImgs: string[] }[] = [];
  fileDividers: { id: number; name: string; carouselImgs: string[] }[] = [];
  superNotes: { id: number; name: string; description: string; carouselImgs: string[] }[] = [];

  checkedFiles: string[] = []; // Checks the ticked filters for the files

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.shredders = this.productsService.getShredders();
    this.twoInchA4Files = this.productsService.getTwoInchA4Files();
    this.twoInchFCFiles = this.productsService.getTwoInchFCFiles();
    this.threeInchA4Files = this.productsService.getThreeInchA4Files();
    this.threeInchFCFiles = this.productsService.getThreeInchFCFiles();
    this.threeInchA4MarbleFiles = this.productsService.getThreeInchA4MarbleFiles();
    this.threeInchFCMarbleFiles = this.productsService.getThreeInchFCMarbleFiles();
    this.fileDividers = this.productsService.getFileDividers();
    this.superNotes = this.productsService.getSuperNotes();
    this.toggleAllOptions();
  }

  filterOptions = {
    all: true,
    options: [
      { label: '2 inch A4 PP Box', checked: false },
      { label: '2 inch FC PP Box', checked: false },
      { label: '3 inch A4 PP Box', checked: false },
      { label: '3 inch FC PP Box', checked: false },
      { label: '3 inch A4 Marble Laminated Box', checked: false },
      { label: '3 inch FC Marble Laminated Box', checked: false },
      // Add other options similarly
    ]
  };

  updateAllCheckbox() {
    this.filterOptions.all = this.filterOptions.options.every(option => option.checked);
    this.checkedFiles = this.filterOptions.options
      .filter(option => option.checked)
      .map(option => option.label);
  }

  toggleAllOptions() {
    for (const option of this.filterOptions.options) {
      option.checked = this.filterOptions.all;
    }
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section + '-section');
    if (element) {
      const navbarHeight: number = 5 * 16; // Assuming 1rem = 16px, so 5rem is 5 * 16px
      const elementRect: DOMRect = element.getBoundingClientRect();

      // Calculate targetOffset and avoid recalculating window.pageYOffset
      const targetOffset: number = elementRect.top + window.pageYOffset - navbarHeight;

      // Use a requestAnimationFrame for smoother animation
      const animationOptions: ScrollToOptions = {
        top: targetOffset,
        behavior: 'smooth'
      };
      window.requestAnimationFrame(() => {
        window.scrollTo(animationOptions);
      });
    }
  }
}
