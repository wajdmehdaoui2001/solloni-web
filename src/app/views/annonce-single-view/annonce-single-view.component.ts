import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce, AnnonceDetails } from 'src/app/models/annonce';
import { AnnoncesService } from 'src/app/services/Annonces/annonces.service';

@Component({
  selector: 'app-annonce-single-view',
  templateUrl: './annonce-single-view.component.html',
  styleUrls: ['./annonce-single-view.component.css']
})
export class AnnonceSingleViewComponent implements OnInit{
  annonce: any;
  annonceDetails:any;

 
  
  

  constructor(private annoncesService:AnnoncesService, private route: ActivatedRoute, private http:HttpClient){
    
  }
  ngOnInit(): void {
   

    const id = this.route.snapshot.params['id'];
   
    
    const apiUrl = `http://annonce.saf-trading.com/api/WSAnnonce/GetDetailsAnnonces?idAdd=${id}`;

  this.http.get(apiUrl).subscribe(
    (details: any) => {
      // Récupérer le userId à partir des détails de l'annonce
      const userId = details.userId;

      // Utiliser l'userId dans l'URL de l'API pour récupérer les détails de l'annonce
      const apiUrlWithUserId = `http://annonce.saf-trading.com/api/WSAnnonce/GetDetailsAnnonces?idAdd=${id}&userId=${userId}`;

      // Faire la requête API pour récupérer les détails de l'annonce avec le userId approprié
      this.http.get(apiUrlWithUserId).subscribe(
        (detailsWithUserId: any) => {
          // Mettre à jour les détails d'annonce avec les données de l'API
          this.annonceDetails = detailsWithUserId;
        },
        error => {
          console.error('Erreur lors de la requête API:', error);
        }
      );
    },
    error => {
      console.error('Erreur lors de la requête API:', error);
    }
  );
       
        
      
    
    
  }

 
  
}
