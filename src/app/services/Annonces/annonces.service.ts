import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Annonce } from 'src/app/models/annonce';
import { catchError, defaultIfEmpty, map } from 'rxjs/operators';
import { AnnonceDetails } from 'src/app/models/annonceDetails';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  apiUrl:string='http://annonce.saf-trading.com/api/WSAnnonce/GetAnnonces?page=1';
  annonces: BehaviorSubject<Array<Annonce>>;
  annoncesDetails:BehaviorSubject<Array<AnnonceDetails>>;
  _annonces:any;
  private annoncesSubject = new BehaviorSubject<Array<Annonce>>([]);
  
  constructor(private httpClient:HttpClient) { 
    this.annonces = new BehaviorSubject<Array<Annonce>>([]);
    this.annoncesDetails=new BehaviorSubject<Array<AnnonceDetails>>([]);
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
     
      
      
      
      getAnnoncesInfos(annonceId: string) {
        const annoncesArray = this.annonces.getValue();
        const annonceTrouvee = annoncesArray.find(annonce => annonce.id === annonceId);
      
        if (annonceTrouvee) {
          this._annonces = annonceTrouvee;
        }
      }
      getAnnoncesDetails(annonceId: string, userId: string): Observable<Array<AnnonceDetails>> {
        const apiUrl = 'http://annonce.saf-trading.com/api/WSAnnonce/GetDetailsAnnonces';
        const params = new HttpParams()
          .set('idAdd', annonceId)
          .set('userId', userId)
          .set('fbclid', 'IwAR3SzltSfZF73BiTf1HFdrh_c-eLhqQssDCd9HSu0HmamBiD15Azw8Tyh2Y'); 
      
        return this.httpClient.get<Array<AnnonceDetails>>(apiUrl, { params }).pipe(
          map((res: any) => {
            if (res && res.data && Array.isArray(res.data)) {
              const arrayDetailsAnnonces = res.data.map((item: { annonce: Annonce, firstname: string, lastname: string, city: string, userId: string, adress: string, inscriptionType: string }) => {
                return new AnnonceDetails(item.annonce, item.firstname, item.lastname, item.userId, item.city, item.adress, item.inscriptionType);
              });
              this.annoncesDetails.next(arrayDetailsAnnonces);
              return arrayDetailsAnnonces;
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
      
      
        getAnnonceById(annonceId: string, observableAnnonces: Observable<Array<AnnonceDetails>>): Observable<Annonce | null> {
          return observableAnnonces.pipe(
              map(annonces => {
                  const annonceTrouvee = annonces.find(item => item.annonce.id === annonceId);
                  return annonceTrouvee ? annonceTrouvee.annonce : null;
              })
          );
        }

       async  getAnnonceDetails(): Promise<AnnonceDetails> {
          const url = "http://annonce.saf-trading.com/api/WSAnnonce/GetDetailsAnnonces?idAdd=50470f40-b231-458f-a51c-3a76c110e8e2&userId=20579674-8fed-41eb-b025-2c85dd1b6975&fbclid=IwAR3SzltSfZF73BiTf1HFdrh_c-eLhqQssDCd9HSu0HmamBiD15Azw8Tyh2Y";
      
          try {
            const response = await fetch(url);
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const data = await response.json();
      
            // Assuming the response data matches the structure of AnnonceDetails
            const annonceDetails = new AnnonceDetails(
              data.annonce,
              data.firstname,
              data.lastname,
              data.address,
              data.city,
              data.inscriptionType,
              data.idUser
            );
      
            return annonceDetails;
          } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
          }
        }
      }
      
      

      
       
      
      
      
         
        
          
         
      
  
    
