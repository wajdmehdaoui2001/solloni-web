import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceDetails } from 'src/app/models/annonceDetails';
import { AnnoncesService } from 'src/app/services/Annonces/annonces.service';

@Component({
  selector: 'app-annonce-single-view',
  templateUrl: './annonce-single-view.component.html',
  styleUrls: ['./annonce-single-view.component.css']
})
export class AnnonceSingleViewComponent implements OnInit{
  annonceDetails: any;
  dataLoaded: boolean = false;
  message: string = '';
  annonceDetails$: any;
  annonce: any;

  
  
  

  constructor(private annoncesService:AnnoncesService, private route: ActivatedRoute, private http:HttpClient){
   
  }
  ngOnInit(): void {
   
    /*this.annonceDetails$ = this.route.params.pipe(
      switchMap(params => {
        const id = params['id'];
        const userId = this.annoncesService.annoncesDetails.getValue()[0].idUser;

        return this.annoncesService.getAnnoncesDetails(id, userId);
      })
    );

    this.annonceDetails$.subscribe(
      (details:any): void => {
        if (details) {
          this.annonce = details.annonce; // Extraire l'objet Annonce
          this.dataLoaded = true;
        } else {
          this.message = 'Annonce non trouvée.';
        }
      },
      (error:any) => {
        this.message = 'Une erreur est survenue lors de la récupération des détails de l\'annonce.';
      }
    );*/
    this.annoncesService.getAnnonceDetails()
    .then(annonceDetails => {
      this.annonceDetails = annonceDetails;
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });

  }
  
  
   
   
   
   
      
    
    
  


  getAnnoncesDetails(id:string,userId:string){
    this.annoncesService.getAnnoncesDetails(id,userId).subscribe((res:any)=>{
      this.annonceDetails=res.data;
      this.dataLoaded=true;
    })
  }
}
