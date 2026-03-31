import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
lead = {
  name: '',
  email: '',
  phone: ''
};

submitLead() {
  console.log(this.lead);
  alert('Lead Submitted!');
}

faqs = [
  {
    question: 'Do you provide 24/7 support?',
    answer: 'Yes, our team operates 24/7 to handle all travel queries and bookings.'
  },
  {
    question: 'What services do you cover?',
    answer: 'We provide flight booking, hotel reservations, cancellations, and customer support.'
  },
  {
    question: 'Do you support international clients?',
    answer: 'Yes, we provide global support across multiple time zones.'
  },
  {
    question: 'How quickly do you respond?',
    answer: 'Our average response time is under 60 seconds.'
  }
];

activeIndex: number | null = null;

toggleFAQ(index: number) {
  this.activeIndex = this.activeIndex === index ? null : index;
}
}
