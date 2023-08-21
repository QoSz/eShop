import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

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

  twoInchA4Files: { id: number; name: string; carouselImgs: string[] }[] = [
    {
      "id": 1,
      "name": "Faili - 2 Inch A4 PP Box File Blue",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 2,
      "name": "Faili - 2 Inch A4 PP Box File Pink",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Pink.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 3,
      "name": "Faili - 2 Inch A4 PP Box File Red",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 4,
      "name": "Faili - 2 Inch A4 PP Box File Yellow",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch A4 PP Box File Yellow.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    }
  ];

  twoInchFCFiles: { id: number; name: string; carouselImgs: string[] }[] = [
    {
      "id": 5,
      "name": "Faili - 2 Inch FC PP Box File Blue",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 6,
      "name": "Faili - 2 Inch FC PP Box File Green",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 7,
      "name": "Faili - 2 Inch FC PP Box File Pink",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Pink.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 8,
      "name": "Faili - 2 Inch FC PP Box File Red",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    },
    {
      "id": 9,
      "name": "Faili - 2 Inch FC PP Box File Yellow",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch FC PP Box File Yellow.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 2 Inch Box File Dimensions.webp"
      ],
    }
  ];

  threeInchA4Files: { id: number; name: string; carouselImgs: string[] }[] = [
    {
      "id": 10,
      "name": "Faili - 3 Inch A4 PP Box File Black",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Black.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 11,
      "name": "Faili - 3 Inch A4 PP Box File Blue",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Blue 01.webp"
      ],
    },
    {
      "id": 12,
      "name": "Faili - 3 Inch A4 PP Box File Green",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 13,
      "name": "Faili - 3 Inch A4 PP Box File Grey",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Grey.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 14,
      "name": "Faili - 3 Inch A4 PP Box File Orange",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Orange.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 15,
      "name": "Faili - 3 Inch A4 PP Box File Pink",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Pink.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 16,
      "name": "Faili - 3 Inch A4 PP Box File Red",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 01.webp"
      ],
    },
    {
      "id": 17,
      "name": "Faili - 3 Inch A4 PP Box File Violet",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Violet.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 18,
      "name": "Faili - 3 Inch A4 PP Box File Yellow",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 PP Box File Yellow.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    }
  ];

  threeInchFCFiles: { id: number; name: string; carouselImgs: string[] }[] = [
    {
      "id": 19,
      "name": "Faili - 3 Inch FC PP Box File Black",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Black.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 20,
      "name": "Faili - 3 Inch FC PP Box File Blue",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Blue 01.webp"
      ],
    },
    {
      "id": 21,
      "name": "Faili - 3 Inch FC PP Box File Green",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 22,
      "name": "Faili - 3 Inch FC PP Box File Grey",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Grey.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 23,
      "name": "Faili - 3 Inch FC PP Box File Orange",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Orange.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 24,
      "name": "Faili - 3 Inch FC PP Box File Pink",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Pink.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 25,
      "name": "Faili - 3 Inch FC PP Box File Red",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 01.webp"
      ],
    },
    {
      "id": 26,
      "name": "Faili - 3 Inch FC PP Box File Yellow",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC PP Box File Yellow.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    },
    {
      "id": 27,
      "name": "Faili - 3 Inch FC PP Box File Purple",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch PP Box File Purple.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Black 01.webp"
      ],
    }
  ];

  threeInchA4MarbleFiles: { id: number; name: string; carouselImgs: string[] }[] = [
    {
      "id": 28,
      "name": "Faili - 3 Inch A4 Marble Laminated Box File Black",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 Marble Laminated Box File Black.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 02.webp"
      ],
    },
    {
      "id": 29,
      "name": "Faili - 3 Inch A4 Marble Laminated Box File Blue",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 Marble Laminated Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 02.webp"
      ],
    },
    {
      "id": 30,
      "name": "Faili - 3 Inch A4 Marble Laminated Box File Green",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 Marble Laminated Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 02.webp"
      ],
    },
    {
      "id": 31,
      "name": "Faili - 3 Inch A4 Marble Laminated Box File Red",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch A4 Marble Laminated Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 02.webp"
      ],
    }
  ];

  threeInchFCMarbleFiles: { id: number; name: string; carouselImgs: string[] }[] = [
    {
      "id": 32,
      "name": "Faili - 3 Inch FC Marble Laminated Box File Black",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC Marble Laminated Box File Black.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 02.webp"
      ],
    },
    {
      "id": 33,
      "name": "Faili - 3 Inch FC Marble Laminated Box File Blue",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC Marble Laminated Box File Blue.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 02.webp"
      ],
    },
    {
      "id": 34,
      "name": "Faili - 3 Inch FC Marble Laminated Box File Green",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC Marble Laminated Box File Green.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 02.webp"
      ],
    },
    {
      "id": 35,
      "name": "Faili - 3 Inch FC Marble Laminated Box File Red",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch FC Marble Laminated Box File Red.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Box File Dimensions.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files Red 02.webp"
      ],
    }
  ];

  fileDividers: { id: number; name: string; carouselImgs: string[] }[] = [
    {
      "id": 1,
      "name": "Faili - Divider A - Z",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - Dividers A-Z 01.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - Dividers A-Z 02.webp"
      ],
    },
    {
      "id": 2,
      "name": "Faili - Divider JAN - DEC",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - Dividers Jan-Dec 01.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - Dividers Jan-Dec 02.webp"
      ],
    },
    {
      "id": 3,
      "name": "Faili - A5 Divider",
      "carouselImgs": [
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - A5 Divider.webp",
        "assets/Images/Faili Limited - Product Images/WEBP/Faili - A5 Divider in File.webp"
      ],
    }
  ];

  superNotes: { id: number; name: string; description: string; carouselImgs: string[] }[] = [
    {
      id: 1,
      name: 'Super Note A5x',
      description: 'Supernote A5 X is your expansive haven for creativity. Designed for the specialists, the academics, and the knowledge seekers, it has generous screen space to dive deep into documents, unfurl the beauty of sketches, and enjoy the art of writing with grace and focus.',
      carouselImgs: [
        'assets/Images/Faili Limited - Product Images/WEBP/supernoteA5x.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/SuperNotePenDarkBlue.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/SuperNotePenLightBlue.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/SuperNotePenGrey.webp',
        'assets/Images/Faili Limited - Product Images/WEBP/SuperNoteVsBanana.webp'
      ],
    },
    // Add more super notes as needed
  ];

  getShredders(): { id: number; name: string; description: string; carouselImgs: string[] }[] {
    return this.shredders;
  }

  getTwoInchA4Files(): { id: number; name: string; carouselImgs: string[] }[] {
    return this.twoInchA4Files;
  }

  getTwoInchFCFiles(): { id: number; name: string; carouselImgs: string[] }[] {
    return this.twoInchFCFiles;
  }

  getThreeInchA4Files(): { id: number; name: string; carouselImgs: string[] }[] {
    return this.threeInchA4Files;
  }

  getThreeInchFCFiles(): { id: number; name: string; carouselImgs: string[] }[] {
    return this.threeInchFCFiles;
  }

  getThreeInchA4MarbleFiles(): { id: number; name: string; carouselImgs: string[] }[] {
    return this.threeInchA4MarbleFiles;
  }

  getThreeInchFCMarbleFiles(): { id: number; name: string; carouselImgs: string[] }[] {
    return this.threeInchFCMarbleFiles;
  }

  getFileDividers(): { id: number; name: string; carouselImgs: string[] }[] {
    return this.fileDividers;
  }

  getSuperNotes(): { id: number; name: string; description: string; carouselImgs: string[] }[] {
    return this.superNotes;
  }

  getProductByCategoryAndId(category: string, id: number): any {
    let products: any[];
  
    // Determine which category array to use based on the provided category
    switch (category) {
      case 'shredders':
        products = this.shredders;
        break;
      case '2-inch-a4-files':
        products = this.twoInchA4Files;
        break;
      case '2-inch-fc-files':
        products = this.twoInchFCFiles;
        break;
      // Add more cases for other categories
      case '3-inch-a4-files':
        products = this.threeInchA4Files;
        break;
      case '3-inch-fc-files':
        products = this.threeInchFCFiles;
        break;
      case '3-inch-a4-marble-files':
        products = this.threeInchA4MarbleFiles;
        break;
      case '3-inch-fc-marble-files':
        products = this.threeInchFCMarbleFiles;
        break;
      case 'file-dividers':
        products = this.fileDividers;
        break;
      case 'super-notes':
        products = this.superNotes;
        break;
      default:
        products = [];
        break;
    }
  
    // Find the product with the specified ID in the selected category
    const product = products.find(item => item.id === id);
    
    return product;
  }
  
}
