import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private alertController: AlertController) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Error al registrarse',
      message: 'El usuario o contraseña no son correctos',
      buttons: ['OK']
    });

    await alert.present();
  }

  login(){
    if (this.loginForm.get('email').value === "user@example.com" && 
        this.loginForm.get('password').value === "changeme"){
          this.router.navigate(['tabs']);
    }else {
      this.errorAlert();
    }
    
  }
}
