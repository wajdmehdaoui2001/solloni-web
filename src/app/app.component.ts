import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnnoncesService } from './services/Annonces/annonces.service';
import { Annonce } from './models/annonce';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<ul>
      <li *ngFor="let annonce of annonces">{{ annonce.title }} - {{ annonce.price }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,OnDestroy {
  annoncesSubscription!: Subscription;
  annonces: Array<Annonce> = [];
  constructor(private annoncesService:AnnoncesService, private api:ApiService,private http:HttpClient){}

 ngOnInit(): void {
  const apiUrl = 'http://annonce.saf-trading.com/api/WSAnnonce/GetAnnonces';

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.annonces = data; // Supposant que la réponse est un tableau d'annonces
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }
 ngOnDestroy(): void {
  this.annoncesSubscription.unsubscribe();
 }
}
