import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DatabaseService]
})
export class FormComponent implements OnInit {
  testForm: FormGroup;
  opts: Array<string> = ["option1", "option2", "option3"];

  constructor(private fb: FormBuilder, private db: DatabaseService) { }

  ngOnInit() {
    let dbOpts: Array<string> = ["opt1 from firebase", "opt2 from firebase", "opt2 from firebase"];

    //####################################################
    //#####Did this one time to populate the database#####
    //####################################################
    // dbOpts.forEach(option=>{
    //   this.db.addOptToDb(option);
    // });

    this.testForm = this.fb.group({

    })
  }

}
