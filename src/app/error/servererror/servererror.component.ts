import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servererror',
  templateUrl: './servererror.component.html',
  styleUrls: ['./servererror.component.css']
})
export class ServererrorComponent implements OnInit {

  constructor() { }
  @Input('errorText') public error ={
    'message': null,
    'status': null
  };
  ngOnInit(): void {
  }

}
