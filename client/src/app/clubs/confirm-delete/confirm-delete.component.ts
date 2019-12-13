import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }


  confirm() {
    this.dialogRef.close(true);
  }

}

