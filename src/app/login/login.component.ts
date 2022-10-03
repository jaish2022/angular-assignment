import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isFormSubmitted:any;
  
  login = new FormGroup({
    username: new FormControl("",[
      Validators.required,
      Validators.minLength(8)
    ]),
    password :new FormControl("",
    [ Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
    ]
    )
  })
  
  get password(){
    return this.login.get('password')
  }
  get username(){
    return this.login.get('username')
  }

  onSubmit(){
    console.log(this.login)
    
    if (this.login.valid){
      this.isFormSubmitted=true;
      return false
    }
    this.validateAllFormFields(this.login);
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {        
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }

  
}
