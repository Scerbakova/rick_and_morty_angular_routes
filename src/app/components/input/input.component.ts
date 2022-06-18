import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  inputForm: FormGroup = this.fb.group({});

  constructor(private router: Router, private fb: FormBuilder) {}

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
      this.router.navigate(['characters'], { queryParams: { name: value } });
    }
  }
}
