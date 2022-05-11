import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  register = {
    name: '',
    email: '',
    password: '',
    password2: '',
    terminos:true
  }

  terminos: boolean =true;

  constructor( private authService: AuthService ) {
    
   }

  ngOnInit(): void {
  }

  registro(formRegister: NgForm) {
    // console.log('enviando formulario', formRegister.value)
    // console.log(formRegister.controls?.['name'].value);
    // console.log(formRegister.controls?.['email'].value);
    const nombre = formRegister.controls?.['name'].value;
    const email = formRegister.controls?.['email'].value;
    // console.log(formRegister.controls);
    const password = formRegister.controls?.['password'].value;
    const password2 = formRegister.controls?.['password2'].value
    if(password == password2 ){
      const data = {
        nombre: nombre,
        email: email,
        password: password
      }
      this.authService.registrar(data).subscribe(console.log)
      console.log('formulario valido')
      
    }else {
      console.log('formulario invalido')
    }

    formRegister.reset ({
      name:'',
      email: '',
      password: '',
      password2: '',
      terminos: false,
    })
  }

}
