import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";

@Injectable()
export class DataProvider {

  private data: string = "../../assets/api/datas.json";

  constructor(public http: HttpClient, public platform: Platform) {
    console.log('Hello DataProvider Provider');
  }

  getDatas(): Observable<any> {
    return this.http.get(`${this.data}`);
  }

}
