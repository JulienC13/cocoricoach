import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-flag-banner',
  templateUrl: './flag-banner.component.html',
  styleUrls: ['./flag-banner.component.scss'],
  standalone: true,
})
export class FlagBannerComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const infoButton = document.getElementById('sidebar-button');
    if (infoButton) {
      if (window.scrollY > window.innerHeight * 0.8) {
        // 100vh
        infoButton.classList.remove('hidden');
        infoButton.classList.add('sidebar-toggle-button');
      } else {
        infoButton.classList.add('hidden');
        infoButton.classList.remove('sidebar-toggle-button');
      }
    }
  }
}
