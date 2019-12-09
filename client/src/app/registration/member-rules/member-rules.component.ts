import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-member-rules',
  templateUrl: './member-rules.component.html',
  styleUrls: ['./member-rules.component.css']
})
export class MemberRulesComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MemberRulesComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
