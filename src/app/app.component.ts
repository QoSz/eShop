import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showScrollUpButton: boolean = false;
  isScrolling: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isScrolling) {
      this.isScrolling = true;

      if (window.scrollY > 200) {
        this.showScrollUpButton = true;
      } else {
        this.showScrollUpButton = false;
      }

      // Debounce the event to prevent excessive function calls
      setTimeout(() => {
        this.isScrolling = false;
      }, 100); // Adjust the debounce time as needed
    }
  }

  scrollToTop() {
    const startScroll = window.scrollY;
    const duration = 1000; // Animation duration in milliseconds
    const startTime = performance.now();

    function scrollStep(timestamp: number) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use a slower easing function for a slower scroll animation
      const easing = (t: number) => t * t * t;

      window.scrollTo(0, startScroll * (1 - easing(progress)));

      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    }

    window.requestAnimationFrame(scrollStep);
  }
  
}
