import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  Allpatient:any=[];
  SetData(Data:any){
    this.Allpatient=Data;
  }

  // getDatas
  GetAllDatas():any{
    return this.Allpatient;
  }

}
