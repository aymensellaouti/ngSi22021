import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { routes } from '../../constantes/routres';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    private toaster: ToastrService,
    public translateService: TranslateService
  ) {
      translateService.setDefaultLang('fr');
      translateService.addLangs(['en', 'fr', 'ar']);
      const browserLang = translateService.getBrowserLang();
      translateService.use(browserLang.match(/en|fr|ar/) ? browserLang : translateService.getDefaultLang());
  }

  ngOnInit(): void {}
  logout(): void {
    this.authService.logout();
    this.toaster.info('A la prochaine fois :)');
    this.router.navigate([routes.login]);
  }

  translate(langage) {
    this.translateService.use(langage);
  }
}
