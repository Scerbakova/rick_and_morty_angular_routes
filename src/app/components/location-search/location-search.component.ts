import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {
  inputForm: FormGroup = this.fb.group({});

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buidForm();
  }

  buidForm(): void {
    this.inputForm = this.fb.group({
      search: [''],
    });
  }

  onSearch(value: string): void {
    if (value && value.length > 3 || value.length === 0) {
      this.router.navigate(['locations'], { queryParams: { name: value } });
    }
  }
}