import { Component, OnInit } from '@angular/core';
import { FmdbService } from 'src/app/services/fmdb.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {

  item:Array<any> = [];
  error: string = null;
  dataErr: boolean= false;
  constructor(private _http:FmdbService, public loader:LoaderService) { }

  ngOnInit() {
    this._http.getDatabases().subscribe(data=>{
      this.item = data.response.databases; 
      this.dataErr =  true;
    }, error=>{
      this.error = error;
    })
  }

}
