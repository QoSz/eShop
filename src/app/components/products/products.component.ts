import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  superNotes: {name: string, img: string} [] = [
    { name: 'Super Note 1', img: 'assets/Images/SuperNote/supernote1.webp' },
    { name: 'Super Note 2', img: 'assets/Images/SuperNote/supernote2.webp' },
  ];

  shredders: {name: string; img: string;} [] = [
    { name: 'Shreader 1', img: 'assets/Images/Shredders/shredder1.jpeg' },
    { name: 'Shreader 2', img: 'assets/Images/Shredders/shredder2.jpeg' },
  ];

  files: {name: string; img: string;} [] = [
    { name: 'File 1', img: 'assets/Images/Files/file1.avif' },
    { name: 'File 2', img: 'assets/Images/Files/file2.avif' },
    { name: 'File 3', img: 'assets/Images/Files/file3.avif' },
    { name: 'File 4', img: 'assets/Images/Files/file4.avif' },
    { name: 'File 5', img: 'assets/Images/Files/file5.avif' },
    { name: 'File 6', img: 'assets/Images/Files/file1.avif' }
  ];
}
