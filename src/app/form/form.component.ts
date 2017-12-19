import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  testForm: FormGroup;
  opts: Array<string> = ["option1", "option2", "option3"];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.testForm = this.fb.group({

    })
  }

}
