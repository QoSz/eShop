import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselItems = [
    {
      imageUrl: 'assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch PP Box Files.webp',
      altText: 'slide 1'
    },
    {
      imageUrl: 'assets/Images/Faili Limited - Product Images/WEBP/Faili - 3 Inch Laminated Box Files All Colours.webp',
      altText: 'slide 2'
    },
    {
      imageUrl: 'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredders.jpg',
      altText: 'slide 3'
    },
    {
      imageUrl: 'assets/Images/Faili Limited - Product Images/WEBP/Faili - Shredder and Lubricant Sheet Box.webp',
      altText: 'slide 4'
    },
    {
      imageUrl: 'assets/Images/Faili Limited - Product Images/WEBP/supernote-A5x2.webp',
      altText: 'slide 5'
    }
  ];
}
