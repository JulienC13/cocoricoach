import { Component } from '@angular/core';

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
}
