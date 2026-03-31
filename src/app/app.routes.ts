import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Flight } from './flight/flight';
import { Hotel } from './hotel/hotel';
import { Services } from './services/services';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'flight', component: Flight },
    { path: 'hotel', component: Hotel },
    { path: 'services', component: Services },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: 'home' }
];
