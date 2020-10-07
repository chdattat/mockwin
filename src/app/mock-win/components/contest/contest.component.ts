import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
})
export class ContestComponent implements OnInit {
  contestForm: FormGroup;
  constructor() {
    this.contestForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required),
      mcq: new FormControl('', Validators.required),
      choices: new FormArray([new FormControl('', Validators.required)]),
      solution: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  get choices(): FormArray {
    return this.contestForm.get('choices') as FormArray;
  }

  addChoice(): void {
    this.choices.push(new FormControl('', Validators.required));
  }

  submitContestForm() {
    if (this.contestForm.valid) {
      console.log(this.contestForm.value);
    }
  }
}
