export class Annonce{
    private _id: string;
    private _title: string;
    private _price: string;
    private _description: string;
    
    private _pictures: string;
    private _country: string
constructor(id:string, title: string,  price: string, description:string, pictures: string,country:string){
    this._id=id;
    this._title=title;
    this._price=price;
    this. _description=description;
   
    this._pictures=pictures;
    this._country=country;
}
get id(): string {
    return this._id;}
set id(value: string) {
    this._id=value;}

    get title() : string  {
      return this._title ; }
     set title ( value : string )   {
       this. _title = value ;
          
}
   
     get price (): string{
        return this._price;

          }
          set price (value: string ){
         this._price=value;
         }
         get description () : string    {
            return this._description;
         }
         set description (value: string)     {
            this._description=value;
            }
      
                get pictures (): string{
                    return this._pictures;
                }
                set pictures(value){
                    this._pictures=value;
                }
        get country(){
            return this._country;
        }
        set country(value){
            this._country=value;
            }
}


