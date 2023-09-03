import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users:any=[1,6,8,90,9]
  userDelete = false;
  constructor(private api:ApiService) {  }
  ngOnInit(): void {
    this.getUser();
  }


  getUser() {
    this.api.getUsers().subscribe(user=>{
      console.log(user);
      this.users = user;
    })
  }

  showNotification() {
    setTimeout(() => {
      this.userDelete = false;
    }, 3000);
  }


  onDelete(user:any) {
    this.api.delete(user?.id).subscribe(res=>{
      console.log('Deleted successfully');
      this.userDelete = true;
      this.showNotification();
      this.getUser();
    })
  }



}
