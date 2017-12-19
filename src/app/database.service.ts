import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/scan';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class DatabaseService {
  opts: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.opts = db.list('/options');
  }

  addOptToDb(opt: string){
    this.opts.push(opt);
  }

  getOpts(){
    return this.opts;
  }

}
