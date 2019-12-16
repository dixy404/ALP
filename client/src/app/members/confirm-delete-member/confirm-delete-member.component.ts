import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete-member',
  templateUrl: './confirm-delete-member.component.html',
  styleUrls: ['./confirm-delete-member.component.css']
})
export class ConfirmDeleteMemberComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDeleteMemberComponent>,
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
