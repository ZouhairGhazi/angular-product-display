import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  value: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  displayVal='';
  name='';


 


  constructor(public dialog: MatDialog) {

   }
 
  ngOnInit(): void {
  } 
  onSubmit(val:string):void {
    this.name=(<HTMLInputElement>document.getElementById("customerName")).value;
    this.displayVal=val;
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{data: { value:this.displayVal }}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
    
   
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'modal-content.html',
})
export class DialogContentExampleDialog  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){

  }




}

