import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FmdbService } from 'src/app/services/fmdb.service';
import { distinctUntilChanged, map, mergeMap } from 'rxjs/operators'
import { LoaderService } from 'src/app/services/loader.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-scriptinfo',
  templateUrl: './scriptinfo.component.html',
  styleUrls: ['./scriptinfo.component.css']
})
export class ScriptinfoComponent implements OnInit, AfterViewInit {

  dbName:string;
  data:Array<string> = [];
  error: any;
  dataErr: boolean= false;
  @ViewChild('searchForm') searchForm: NgForm;
  constructor(private http: FmdbService, private route: ActivatedRoute, public loader: LoaderService) { }

  ngOnInit(): void {
    this.dbName = this.route.snapshot.paramMap.get('database');
    this.loadData();
  }

  ngAfterViewInit(){
    let formData = this.searchForm.valueChanges;
    formData.pipe(
      map(res=> res['searchTerm']),
      distinctUntilChanged(),
    ).subscribe(data=>{
      let fdata=[];
      this.data.filter(res=>{
       if(res['name'].toLowerCase().includes(data.toLowerCase()))
       {
         console.log(res);
         fdata.push(res);
       }
       if(!data){
         this.loadData();
       }
      })
      this.data = fdata;
    })
  }

  loadData(){
    this.http.getToken(this.dbName).pipe(
      mergeMap(data=>this.http.getScripts(this.dbName, data.response.token))
    ).subscribe(data=>{
      this.data = data.response.scripts;
      this.dataErr = true;
    },error =>{
      this.error = error;
    })
  }
}
