import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FmdbService } from 'src/app/services/fmdb.service';
import { mergeMap } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-databaseinfo',
  templateUrl: './databaseinfo.component.html',
  styleUrls: ['./databaseinfo.component.css']
})
export class DatabaseinfoComponent implements OnInit {

  db: string;
  data: Array<any> = [];
  error:any;
  dataErr: boolean= false;
  constructor(private route: ActivatedRoute, private http:FmdbService, public loader:LoaderService) { }

  ngOnInit(): void {
    this.db = this.route.snapshot.paramMap.get('database');

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
