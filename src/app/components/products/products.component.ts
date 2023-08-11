import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  checkedFiles: string[] = [];

  ngOnInit(): void {
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
        'assets/Images/SuperNote/supernoteA5x.webp',
        'https://supernote.com/cdn/shop/files/Artboard4_361337b7-8571-4c29-b494-a7ff456c7d78_840x.jpg?v=1689238059'
      ],
    },
    // Add more super notes as needed
  ];


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
