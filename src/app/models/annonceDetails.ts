import { Annonce } from "./annonce";

export class AnnonceDetails {
    private _annonce: Annonce;
    private _firstname: string;
    private _lastname: string;
    private _address: string;
    private _city: string;
    private _inscriptionType: string;
    private _idUser: string;
  
    constructor(
      annonce: Annonce,
      firstname: string,
      lastname: string,
      address: string,
      city: string,
      inscriptionType: string,
      idUser:string
    ) {
      this._annonce = annonce;
      this._firstname = firstname;
      this._lastname = lastname;
      this._address = address;
      this._city = city;
      this._inscriptionType = inscriptionType;
      this._idUser=idUser;
    }
  
    get annonce(): Annonce {
      return this._annonce;
    }
  
    set annonce(value: Annonce) {
      this._annonce = value;
    }
  
    get firstname(): string {
      return this._firstname;
    }
  
    set firstname(value: string) {
      this._firstname = value;
    }
  
    get lastname(): string {
      return this._lastname;
    }
  
    set lastname(value: string) {
      this._lastname = value;
    }
  
    get address(): string {
      return this._address;
    }
  
    set address(value: string) {
      this._address = value;
    }
  
    get city(): string {
      return this._city;
    }
  
    set city(value: string) {
      this._city = value;
    }
  
    get inscriptionType(): string {
      return this._inscriptionType;
    }
  
    set inscriptionType(value: string) {
      this._inscriptionType = value;
    }
    get idUser(): string {
      return this._idUser;
                 }
        set idUser(value){
         this._idUser=value
                 }
  }
  