import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FmdbService } from 'src/app/services/fmdb.service';
import { distinctUntilChanged, map, mergeMap } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-databaseinfo',
  templateUrl: './databaseinfo.component.html',
  styleUrls: ['./databaseinfo.component.css']
})
export class DatabaseinfoComponent implements OnInit, AfterViewInit {

  db: string;
  data: Array<any> = [];
  error:any;
  dataErr: boolean= false;
  @ViewChild('searchForm') searchForm: NgForm;
  constructor(private route: ActivatedRoute, private http:FmdbService, public loader:LoaderService) { }

  ngOnInit(): void {
    this.db = this.route.snapshot.paramMap.get('database');
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
       if(res.name.toLowerCase().includes(data.toLowerCase())){
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
    this.http.getToken(this.db).pipe(
      mergeMap(data=>this.http.getLayout(this.db, data.response.token))
    ).subscribe(data=>{
      this.data = data.response.layouts;
      this.dataErr =true;
    }, error=>{
      this.error = error;
    })
  }

}
