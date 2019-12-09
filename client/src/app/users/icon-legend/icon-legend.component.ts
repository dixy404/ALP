import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-icon-legend',
  templateUrl: './icon-legend.component.html',
  styleUrls: ['./icon-legend.component.css']
})
export class IconLegendComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<IconLegendComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
