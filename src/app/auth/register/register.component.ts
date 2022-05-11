import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormRegistro } from '../../interfaces/interfaces.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public formRegister: FormGroup = this.fb.group({
    name: ['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['',Validators.required],
    pasword2: ['',Validators.required],
    termino: [true, Validators.required]
  });


  constructor( private authService: AuthService, private fb: FormBuilder ) {
    
   }

  ngOnInit(): void {
  }

  registro() {
    console.log(this.formRegister.value);
    if (this.formRegister.get('password')?.value != this.formRegister.get('password2')?.value) {
      console.log('error de password');      
      return;
    }

    const data: FormRegistro = {
      nombre: this.formRegister.get('name')?.value,
      email: this.formRegister.get('email')?.value,
      password: this.formRegister.get('password')?.value,
    }

    this.authService.registrar(data).subscribe(resp => {
      localStorage.setItem('token', resp.token)
      
    });
    // this.authService.registrar(data).subscribe(console.log)
    // // console.log('enviando formulario', formRegister.value)
    // // console.log(formRegister.controls?.['name'].value);
    // // console.log(formRegister.controls?.['email'].value);
    // const nombre = formRegister.controls?.['name'].value;
    // const email = formRegister.controls?.['email'].value;
    // // console.log(formRegister.controls);
    // const password = formRegister.controls?.['password'].value;
    // const password2 = formRegister.controls?.['password2'].value
    // if(password == password2 ){
    //   const data = {
    //     nombre: nombre,
    //     email: email,
    //     password: password
    //   }
    //   this.authService.registrar(data).subscribe(console.log)
    //   console.log('formulario valido')
      
    // }else {
    //   console.log('formulario invalido')
    // }

    // formRegister.reset ({
    //   name:'',
    //   email: '',
    //   password: '',
    //   password2: '',
    //   terminos: false,
    // })
  }

}
