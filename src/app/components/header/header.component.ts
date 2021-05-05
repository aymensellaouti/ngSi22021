import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { routes } from '../../constantes/routres';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  logout(): void {
    this.authService.logout();
    this.toaster.info('A la prochaine fois :)');
    this.router.navigate([routes.login]);
  }
}
