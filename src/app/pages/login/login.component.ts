import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isVisible:boolean = false;
  message:string;
  
  constructor(private fb: FormBuilder, private route:Router) {}
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  submitForm(formData) {
    const {value} = formData
    console.log(value);
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).map(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      })
    }
    const userName = 'usuario_boca';
    const pass = '1234'
    if (value.userName === userName && value.password === pass) {
      this.route.navigate(['./welcome/home'])
    }else{
      this.isVisible = true
      this.message = "El usuario y/o contraseña no son correctos"
    }
  }
  handleOk(){
    this.isVisible = false

  }

}
