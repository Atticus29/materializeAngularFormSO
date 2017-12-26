import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from '../database.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DatabaseService]
})
export class FormComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  testForm: FormGroup;
  opts: Array<string> = ["option1", "option2", "option3"];
  retrievedDbOpts: any[];

  constructor(private fb: FormBuilder, private db: DatabaseService) { }

  ngOnInit() {

    //####################################################
    //#####Did this one time to populate the database#####
    //####################################################
    // let dbOpts: Array<string> = ["opt1 from firebase", "opt2 from firebase", "opt2 from firebase"];
    // dbOpts.forEach(option=>{
    //   this.db.addOptToDb(option);
    // });

    this.testForm = this.fb.group({
      positiveControl1Bound: '',        // Added this line
      positiveControl2Bound: '',        // Added this line
      positiveControl3Bound: '',        // Added this line
      useCase: '', 
    });

    this.db.getOpts().subscribe(opts=>{
      this.retrievedDbOpts = opts;
    });
  }

}
