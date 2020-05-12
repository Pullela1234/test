import { Component, OnInit } from '@angular/core';
import {UppercaseService} from "src/app/services/uppercase.service";
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styles: []
})
export class UppercaseComponent implements OnInit {
 private res:any;
  constructor(private _service:UppercaseService) { }

  ngOnInit() {

  }
  public clickMe(obj:any):any{
    this._service.ConverToUpperCase(obj).subscribe((posRes)=>{
      this.res=posRes;
    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Client side error..");
      }else{
        console.log("Server side error..");
      }
    });
  };

};
