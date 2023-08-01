import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showScrollUpButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 200) {
      this.showScrollUpButton = true;
    } else {
      this.showScrollUpButton = false;
    }
  }

  scrollToTop() {
    const scrollToTop = window.setInterval(() => {
      const pos = window.scrollY;
      if (pos > 0) {
        window.scrollTo(0, pos - 50); // Adjust the scroll speed by changing the value (e.g., 20)
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16); // Adjust the scroll interval (e.g., 16 milliseconds for 60 FPS)
  }
  
}
