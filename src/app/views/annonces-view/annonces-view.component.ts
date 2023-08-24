import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Annonce } from 'src/app/models/annonce';
import { AnnoncesService } from 'src/app/services/Annonces/annonces.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-annonces-view',
  templateUrl: './annonces-view.component.html',
  styleUrls: ['./annonces-view.component.css']
})
export class AnnoncesViewComponent implements OnInit,OnDestroy {
  @ViewChild('carousel')
  carousel!: ElementRef;
  
  annoncesSubscription: Subscription | undefined; 
  annonces: Array<Annonce> = [];
apiUrl: any;
  constructor(private annoncesService:AnnoncesService, private api:ApiService,private http:HttpClient,private router: Router,private renderer: Renderer2){}
  

 ngOnInit(): void {
  const apiUrl = 'http://annonce.saf-trading.com/api/WSAnnonce/GetAnnonces?page=1';

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.annonces = data; 
      },
      (error: any) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
   
    
  }
 ngOnDestroy(): void {
  if (this.annoncesSubscription) {
    this.annoncesSubscription.unsubscribe();
  }
 }
 goToAnnonceDetails(id: string) {
  this.router.navigate(['/annonce', id]);
  (error: any) => {
    console.error('Une erreur s\'est produite :', error);
  }
}
}
