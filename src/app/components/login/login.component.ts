import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
    ){}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
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

  onLogin(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=> {
          alert(res.message)
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
  }

}
