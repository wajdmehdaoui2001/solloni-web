import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesService } from './services/Annonces/annonces.service';
import { ApiService } from './services/api/api.service';
import { AnnoncesViewComponent } from './views/annonces-view/annonces-view.component';
import { HeaderComponent } from './components/header/header.component';
import { GeneralViewComponent } from './views/general-view/general-view.component';
import { AnnonceSingleViewComponent } from './views/annonce-single-view/annonce-single-view.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    declarations: [
        AppComponent,
        AnnoncesViewComponent,
        HeaderComponent,
        GeneralViewComponent,
        AnnonceSingleViewComponent
    ],
    providers: [AnnoncesService, ApiService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
        CarouselModule.forRoot(),
    ]
})
export class AppModule { }
