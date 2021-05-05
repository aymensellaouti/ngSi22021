import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/constantes/routres';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  login(formulaire: NgForm) {
    this.authService.login(formulaire.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.toaster.success(`Bienvenu dans votre cvTech :)`);
        this.router.navigate([routes.cv]);
      },
      (erreur) => {
        this.toaster.error('Veuillez vérifier vos credentials');
        console.log(erreur);
      }
    );
  }
}
