import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecharacterComponent } from './singlecharacter.component';

describe('SinglecharacterComponent', () => {
  let component: SinglecharacterComponent;
  let fixture: ComponentFixture<SinglecharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglecharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglecharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
