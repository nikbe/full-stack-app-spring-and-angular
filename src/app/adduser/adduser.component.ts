import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  form!: FormGroup ; // Declare the property without an initializer

  constructor(private formBuilder: FormBuilder, private api:ApiService,private router:Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
      contactNo: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('value',this.form.value);
      this.api.addUser(this.form.value).subscribe(res=>{
        console.log('User add successfully');
        this.router.navigate(['']);
      })
      
    }
  }

}
