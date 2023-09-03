import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  details:any;
  form!: FormGroup;
  userId:any;
  constructor(
    private route: ActivatedRoute,
    private api:ApiService,
    private formBuilder: FormBuilder,
    private router:Router
    ) { 
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        description: ['', Validators.required],
        contactNo: ['', Validators.required],
        status: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.onSingleUser();
  }

  onSingleUser() {
    this.route.params.subscribe((params:any) => {
      console.log('ERTYUIO',params);
      this.userId=Number(params.id);
      this.api.getSingleUser(params?.id).subscribe(res=>{
        this.details = res;
        this.form.patchValue(res);
      })
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('update',this.form.value);
      this.api.updateUser({...this.form.value,id:this.userId}).subscribe(res=>{
        console.log('updated successfully');
        this.router.navigate(['']);
      })
    }
  }


}
