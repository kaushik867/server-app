import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FmdbService } from 'src/app/services/fmdb.service';
import { mergeMap } from 'rxjs/operators'
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-scriptinfo',
  templateUrl: './scriptinfo.component.html',
  styleUrls: ['./scriptinfo.component.css']
})
export class ScriptinfoComponent implements OnInit {

  dbName:string;
  data:Array<string> = [];
  error: any;
  dataErr: boolean= false;
  constructor(private http: FmdbService, private route: ActivatedRoute, public loader: LoaderService) { }

  ngOnInit(): void {
    this.dbName = this.route.snapshot.paramMap.get('database');

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
