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
      description: ' Faili - Shredder C149-D: Your ultimate shredding solution. With its sleek design and powerful performance, this cutting-edge shredder effortlessly tackles documents, CDs, and credit cards, providing top-level security for your sensitive information. Say goodbye to clutter and protect your privacy with Faili - Shredder C149-D.',
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder C149-D.webp'
      ],
    },
    {
      id: 2,
      name: 'Faili - Shredder C156-C',
      description: "Faili - Shredder C156-C: A modern marvel of efficiency and safety. This sleek shredder is equipped to handle your shredding needs with precision, whether it's documents, credit cards, or CDs. Safeguard your confidential data and maintain a clutter-free workspace effortlessly. Experience the perfect balance of performance and convenience with Faili - Shredder C156-C.",
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder C156-C.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder and Lubricant Sheet.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder and Lubricant Sheet Box.webp'
      ],
    },
    // Add more shredders as needed
  ];

  files: { id: number; name: string; description: string; carouselImgs: string[] }[] = [
    {
      "id": 1,
      "name": "Faili - 2 Inch A4 PP Box File Blue",
      "description": "Description for File 1",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 2,
      "name": "Faili - 2 Inch A4 PP Box File Pink",
      "description": "Description for File 2",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Pink.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 3,
      "name": "Faili - 2 Inch A4 PP Box File Red",
      "description": "Description for File 3",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 4,
      "name": "Faili - 2 Inch A4 PP Box File Yellow",
      "description": "Description for File 4",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Yellow.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 5,
      "name": "Faili - 2 Inch FC PP Box File Blue",
      "description": "Description for File 5",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 6,
      "name": "Faili - 2 Inch FC PP Box File Green",
      "description": "Description for File 6",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 7,
      "name": "Faili - 2 Inch FC PP Box File Pink",
      "description": "Description for File 7",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Pink.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 8,
      "name": "Faili - 2 Inch FC PP Box File Red",
      "description": "Description for File 8",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 9,
      "name": "Faili - 2 Inch FC PP Box File Yellow",
      "description": "Description for File 9",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Yellow.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 10,
      "name": "Faili - 3 Inch A4 Marble Laminated Box File Black",
      "description": "Description for File 10",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 Marble Laminated Box File Black.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 11,
      "name": "Faili - 3 Inch A4 Marble Laminated Box File Blue",
      "description": "Description for File 11",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 Marble Laminated Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 12,
      "name": "Faili - 3 Inch A4 Marble Laminated Box File Green",
      "description": "Description for File 12",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 Marble Laminated Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 13,
      "name": "Faili - 3 Inch A4 Marble Laminated Box File Red",
      "description": "Description for File 13",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 Marble Laminated Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 14,
      "name": "Faili - 3 Inch A4 PP Box File Black",
      "description": "Description for File 14",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Black.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 15,
      "name": "Faili - 3 Inch A4 PP Box File Blue",
      "description": "Description for File 15",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 16,
      "name": "Faili - 3 Inch A4 PP Box File Green",
      "description": "Description for File 16",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 17,
      "name": "Faili - 3 Inch A4 PP Box File Grey",
      "description": "Description for File 17",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Grey.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 18,
      "name": "Faili - 3 Inch A4 PP Box File Orange",
      "description": "Description for File 18",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Orange.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 19,
      "name": "Faili - 3 Inch A4 PP Box File Pink",
      "description": "Description for File 19",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Pink.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 20,
      "name": "Faili - 3 Inch A4 PP Box File Red",
      "description": "Description for File 20",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 21,
      "name": "Faili - 3 Inch A4 PP Box File Violet",
      "description": "Description for File 21",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Violet.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 22,
      "name": "Faili - 3 Inch A4 PP Box File Yellow",
      "description": "Description for File 22",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Yellow.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 23,
      "name": "Faili - 3 Inch FC Marble Laminated Box File Black",
      "description": "Description for File 23",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC Marble Laminated Box File Black.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 24,
      "name": "Faili - 3 Inch FC Marble Laminated Box File Blue",
      "description": "Description for File 24",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC Marble Laminated Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 25,
      "name": "Faili - 3 Inch FC Marble Laminated Box File Green",
      "description": "Description for File 25",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC Marble Laminated Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 26,
      "name": "Faili - 3 Inch FC Marble Laminated Box File Red",
      "description": "Description for File 26",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC Marble Laminated Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 27,
      "name": "Faili - 3 Inch FC PP Box File Black",
      "description": "Description for File 27",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Black.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 28,
      "name": "Faili - 3 Inch FC PP Box File Blue",
      "description": "Description for File 28",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 29,
      "name": "Faili - 3 Inch FC PP Box File Green",
      "description": "Description for File 29",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 30,
      "name": "Faili - 3 Inch FC PP Box File Grey",
      "description": "Description for File 30",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Grey.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 31,
      "name": "Faili - 3 Inch FC PP Box File Orange",
      "description": "Description for File 31",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Orange.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 32,
      "name": "Faili - 3 Inch FC PP Box File Pink",
      "description": "Description for File 32",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Pink.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 33,
      "name": "Faili - 3 Inch FC PP Box File Red",
      "description": "Description for File 33",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 34,
      "name": "Faili - 3 Inch FC PP Box File Yellow",
      "description": "Description for File 34",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Yellow.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 35,
      "name": "Faili - 3 Inch PP Box File Purple",
      "description": "Description for File 35",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch PP Box File Purple.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp"
      ],
    },
  ];
}
