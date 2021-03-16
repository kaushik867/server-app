import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { FmdbService } from 'src/app/services/fmdb.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: ActivatedRoute,  private http: FmdbService, public loader: LoaderService) { 
    this.db = this.router.snapshot.paramMap.get('database');
    this.layout = this.router.snapshot.paramMap.get('layout');
  }
  db: string;
  layout: string;
  data: Array<any> = [];
  error: any;
  dataErr: boolean= false;

  ngOnInit(): void {
    

    this.http.getToken(this.db).pipe(
      mergeMap(res=> this.http.getLayoutMetadata(this.db, this.layout, res.response.token ))
    ).subscribe(data=>{
      this.data = data.response;
      console.log(data);
      this.dataErr = true;
    },error=>{
      this.error = error;
    })
    
  }

}
