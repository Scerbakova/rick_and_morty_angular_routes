import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import { Character, Info } from 'src/app/interface/character';
import { RickAndMortyService } from 'src/app/service/rick-and-morty.service';
import { take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  info: Info | undefined;

  private query: string | undefined;

  constructor(
    private characterService: RickAndMortyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onURLChange();
  }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  private onURLChange(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.characters = [];
      this.getCharactersByQuery()
    })
  }

  private getCharactersByQuery(): void {
    this.route.queryParams
      .pipe(take(1))
      .subscribe((params: Params) => {
        this.query = params['name'];
        this.getCharactersFromService();
      });
  }

  private getCharactersFromService(): void {
    this.characterService
      .getCharacters(this.query)
      .pipe(take(1))
      .subscribe((res) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }
}
