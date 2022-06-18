import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/pages/characters/character-list/character-list.component';
import { SinglecharacterComponent } from './components/pages/characters/singlecharacter/singlecharacter.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationListComponent } from './components/pages/locations/location-list/location-list.component';
import { LocationSearchComponent } from './components/location-search/location-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    SinglecharacterComponent,
    HeaderComponent,
    InputComponent,
    LocationListComponent,
    LocationSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
