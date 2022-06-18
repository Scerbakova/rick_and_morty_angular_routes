import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/interface/character';
import { RickAndMortyService } from '@app/service/rick-and-morty.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singlecharacter',
  templateUrl: './singlecharacter.component.html',
  styleUrls: ['./singlecharacter.component.scss']
})
export class SinglecharacterComponent implements OnInit {
  character$: Observable<Character> | undefined;
  next: number | undefined;
  prev: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.next = +id + 1
      if (this.next >= 826) {
        this.next = 1
      }

      this.prev = +id - 1
      if (this.prev <= 0) {
        this.prev = 826
      }

      this.character$ = this.rickAndMortyService.getCharacter(id);
    });
  }
}
