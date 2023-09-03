import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  details:any;

  constructor(private route: ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.onSingleUser();
  }

  onSingleUser() {
    this.route.params.subscribe((params:any) => {
      console.log('ERTYUIO',params);
      this.api.getSingleUser(params?.id).subscribe(res=>{
        this.details = res;
      })
      
    });
  }

}
