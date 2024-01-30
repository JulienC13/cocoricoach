import { Component } from '@angular/core';
import { FlagBannerComponent } from './components/flag-banner/flag-banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    FlagBannerComponent,
    NavbarComponent,
    MainContentComponent,
    ContactComponent,
    FooterComponent,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'cocoricoach';
}
