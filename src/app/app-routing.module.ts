import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/pages/characters/character-list/character-list.component';
import { SinglecharacterComponent } from './components/pages/characters/singlecharacter/singlecharacter.component';
import { LocationListComponent } from './components/pages/locations/location-list/location-list.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:id',
    component: SinglecharacterComponent,
  },
  {
    path: 'locations',
    component: LocationListComponent,
  },
  {
    path: '**',
    redirectTo: 'characters',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
