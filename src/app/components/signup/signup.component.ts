import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  
  signupForm!: FormGroup;
  


  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ){}
  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }


  type:string ="password";
  isText: boolean=false;
  eyeIcon: string = "fa-eye-slash"

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup(){
    if(this.signupForm.valid){
      this.auth.signUp(this.signupForm.value)
      .subscribe({
        next:(res => {
          alert(res.message)
        }),
        error:(err =>{
          alert(err?.error.message)
        }
        )
      })
    }
  }


}
