import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [HttpClient],
})
export class ContactComponent {
  user = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    const formUrl = 'https://formspree.io/f/xoqgvpje'; // Replace with your Formspree URL
    this.http.post(formUrl, this.user).subscribe({
      next: (response) => {
        console.log('Formulaire envoyé avec succès', response);
        window.location.reload(); // Refresh the page after successful submission
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi du formulaire", error);
      },
      complete: () => {
        // Any additional actions on completion, if necessary
      },
    });
  }
}
