import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }


  confirm() {
    this.dialogRef.close(true);
    this.router.navigate(['/profile-deleted']); 
  }

}
