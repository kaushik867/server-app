import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FmdbService } from 'src/app/services/fmdb.service';
import { LoaderService } from 'src/app/services/loader.service';
import { debounceTime, distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit, AfterViewInit {

  item:Array<any> = [];
  error: string = null;
  dataErr: boolean= false;
  subs:Subscription;
  @ViewChild('searchForm') searchForm: NgForm;
  constructor(private _http:FmdbService, public loader:LoaderService) { }

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit(){
    let formData = this.searchForm.valueChanges;
    formData.pipe(
      map(res=> res['searchTerm']),
      distinctUntilChanged(),
    ).subscribe(data=>{
      let fdata=[];
      this.item.filter(res=>{
       if(res.name.toLowerCase().includes(data.toLowerCase()))
       {
         console.log(res);
         fdata.push(res);
       }
       if(!data){
         this.loadData();
       }
      })
      this.item = fdata;
    })
  }

  loadData(){
    this.subs= this._http.getDatabases().pipe(shareReplay()).subscribe(data=>{
      this.item = data.response.databases; 
      this.dataErr = true;
    }, error=>{
      this.error = error;
    })
  }
}
