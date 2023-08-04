import { Component } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  superNotes: { id: number; name: string; description: string; carouselImgs: string[] }[] = [
    {
      id: 1,
      name: 'Super Note A5x',
      description: 'Supernote A5 X is your expansive haven for creativity. Designed for the specialists, the academics, and the knowledge seekers, it has generous screen space to dive deep into documents, unfurl the beauty of sketches, and enjoy the art of writing with grace and focus.',
      carouselImgs: [
        'assets/Images/SuperNote/supernoteA5x.webp',
        'https://supernote.com/cdn/shop/files/Artboard4_361337b7-8571-4c29-b494-a7ff456c7d78_840x.jpg?v=1689238059',
        'https://via.placeholder.com/400x200',
      ],
    },
    {
      id: 2,
      name: 'Super Note A6x',
      description: 'Discover the SuperNote A6x, your gateway to boundless creativity. Tailored for visionaries, academics, and inquisitive minds, it offers ample screen space to dive into documents, unleash artistic sketches, and write with finesse. Seamlessly capture ideas, annotate, and sketch with precision—a haven for your limitless imagination.',
      carouselImgs: [
        'assets/Images/SuperNote/supernoteA6x.webp',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/400x200',
      ],
    },
    // Add more super notes as needed
  ];

  shredders: { id: number; name: string; description: string; carouselImgs: string[] }[] = [
    {
      id: 1,
      name: 'Faili - Shredder C149-D',
      description: 'Description for Shreader 1',
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder C149-D.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder and Lubricant Sheet Box.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder Lubricant Sheet.webp'
      ],
    },
    {
      id: 2,
      name: 'Faili - Shredder C156-C',
      description: 'Description for Shreader 2',
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder C156-C.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder and Lubricant Sheet.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder and Lubricant Sheet Box.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder Lubricant Sheet.webp'
      ],
    },
    // Add more shredders as needed
  ];

  files: { id: number; name: string; description: string; carouselImgs: string[] }[] = [
    {
      id: 1,
      name: 'File 1',
      description: 'Description for File 1',
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Blue.webp',
      ],
    },
    {
      id: 2,
      name: 'File 2',
      description: 'Description for File 2',
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Pink.webp',
      ],
    },
    {
      id: 3,
      name: 'File 3',
      description: 'Description for File 3',
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Red.webp',
      ],
    },
    {
      id: 4,
      name: 'File 4',
      description: 'Description for File 4',
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Yello.webp',
      ],
    },
    {
      id: 5,
      name: 'File 5',
      description: 'Description for File 5',
      carouselImgs: [
        'assets/Images/Files/file5.avif',
        'assets/Images/Files/file2.avif',
      ],
    },
    // Add more files as needed
  ];
}
