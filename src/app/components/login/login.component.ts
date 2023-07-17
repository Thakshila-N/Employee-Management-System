import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // Implement the formGroup
  loginForm! : FormGroup

  constructor(
    // inject form builder
    private fb : FormBuilder
  ){}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });

  }

  // This section related to the show and hide password section
  type:string ="password";
  isText: boolean=false;
  eyeIcon: string = "fa-eye-slash"

  hideShowPass(){
    this.isText = !this.isText;
    //
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
// end of the show and hide password section

// onSubmit method
onSubmit(){
  if(this.loginForm.valid){

    console.log(this.loginForm.value)

  }else{

  }
}

}
