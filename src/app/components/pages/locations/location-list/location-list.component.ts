import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { RickAndMortyService } from '@app/service/rick-and-morty.service';
import { take, filter } from 'rxjs';
import { LocationResult } from 'src/app/interface/locations';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  locations: LocationResult[] = [];

  private query: string | undefined;

  constructor(
    private characterService: RickAndMortyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onURLChange();
  }

  ngOnInit(): void {
    this.getLocationsByQuery();
  }

  private onURLChange(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.locations = [];
      this.getLocationsByQuery()
    })
  }

  private getLocationsByQuery(): void {
    this.route.queryParams
      .pipe(take(1))
      .subscribe((params: Params) => {
        this.query = params['name'];
        this.getLocationsFromService();
      });
  }

  private getLocationsFromService(): void {
    this.characterService
      .getLocations(this.query)
      .pipe(take(1))
      .subscribe((res) => {
        if (res?.results?.length) {
          const { results } = res;
          this.locations = [...this.locations, ...results];
        } else {
          this.locations = [];
        }
      });
  }
}