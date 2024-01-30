import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  faArrowDown = faArrowDown;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const arrowButton = document.getElementById('arrowButton');
    if (arrowButton) {
      if (window.scrollY > window.innerHeight) {
        // 100vh
        arrowButton.classList.remove('hidden');
      } else {
        arrowButton.classList.add('hidden');
      }
    }
  }
}
