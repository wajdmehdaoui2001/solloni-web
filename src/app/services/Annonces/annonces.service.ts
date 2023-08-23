import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Annonce, AnnonceDetails } from 'src/app/models/annonce';
import { catchError, defaultIfEmpty, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  apiUrl:string='http://annonce.saf-trading.com/api/WSAnnonce/GetAnnonces?page=1';
  annonces: BehaviorSubject<Array<Annonce>>;
  annoncesDetails:Array<AnnonceDetails>=[];
  _annonces:any;
  private annoncesSubject = new BehaviorSubject<Array<Annonce>>([]);
  
  constructor(private httpClient:HttpClient) { 
    this.annonces = new BehaviorSubject<Array<Annonce>>([]);
    
  }
  getAnnonces(id: number): Observable<Array<Annonce>>{
    return  this.httpClient.get<any[]>(this.apiUrl).pipe(
      map((res: any) => {
        if (res && res.data && Array.isArray(res.data)) {
          const arrayAnnonces = res.data.map((item: { id: string; title: string; price: string;description: string;pictures:string, country: string }) => {
            return new Annonce(item.id, item.title, item.price, item.description,item.pictures, item.country);
          });
          this.annonces.next(arrayAnnonces);
          return arrayAnnonces;
        } else {
          console.error('Données inattendues de l\'API :', res);
          return []; 
        }
      }),
      catchError((error: any) => {
        console.error('Erreur lors de la requête API :', error);
        return []; 
      })
    );
      }
     
      
      
      
      getAnnoncesInfos(annonceId: string){
        for(let annonce of this._annonces){
          if(annonce.id===annonceId){
            this._annonces=annonce;
          }
        }
      }
        
        
      }
      

      
       
      
      
      
         
        
          
         
      
  
    
