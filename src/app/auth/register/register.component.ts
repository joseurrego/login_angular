import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';


import Swal from 'sweetalert2';


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
    password2: ['',Validators.required],
    terminos: [true, Validators.required]
  });


  constructor( private authService: AuthService, private fb: FormBuilder, private router: Router ) {
    
   }

  ngOnInit(): void {
  }

  registro() {
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
      console.log(resp);
      localStorage.setItem('token', resp.token)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Usuario ${resp.nombre} Registrado Correctamente`,
        showConfirmButton: false,
        timer: 2000,
      })
    });
    this.router.navigateByUrl('home');
    
  }

}
