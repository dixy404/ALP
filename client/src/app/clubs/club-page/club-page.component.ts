import { Component, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';
import { Router } from '@angular/router';
import { Club } from 'src/app/model/club.model';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css']
})
export class ClubPageComponent implements OnInit {
  club: Club;
  filedata:any;
  public form: NgForm
    fileEvent(e){
        this.filedata = e.target.files[0];
    }

  constructor(private clubsService: ClubsService, 
    private router: Router,
    private dialog: MatDialog,
    private http: HttpClient,) { }

  ngOnInit() {
    this.clubsService.GetClub().subscribe((data) => {
      console.log(data);
      this.club = data ['club'];
    });
  }

  
  editClub() {
    console.log("testing club", this.club)
    this.router.navigate([`clubs/edit-club/${this.club.id}`]);
  }

  deleteClub(id) {
    this.dialog.open(ConfirmDeleteComponent, {
      width: '350px'
    })
    
    .afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
      this.clubsService.deleteClub(id).subscribe(data => console.log(data))
  }
});
}

onSubmit(f: NgForm, id, club:Club) {
       
  var myFormData = new FormData();
  const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
myFormData.append('thumbnail', this.filedata);
this.http.post(`http://localhost:8000/api/addclubphoto/${id}` +  club, myFormData, {
headers: headers
}).subscribe(data => {
console.log(data);
});

}

  }
  

