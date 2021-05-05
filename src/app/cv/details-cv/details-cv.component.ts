import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cv: Cv = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private toaster: ToastrService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((qp) => console.log(qp));
    this.activatedRoute.params.subscribe((parametres) => {
      this.cvService.getCvById(+parametres.id).subscribe(
        (cv) => {
          this.cv = cv;
        },
        (erreur) => {
          this.toaster.warning(
            'Cv innexistant, prière de passer par le bouton détail'
          );
          this.router.navigate(['cv']);
          console.log(erreur);
        }
      );
    });
  }

  deleteCv() {
    this.cvService.deleteCv(this.cv.id).subscribe(
      (data) => {
        this.toaster.success(
          `Le cv de ${this.cv.firstname} ${this.cv.name} a été supprimé avec succès`
        );
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }
    );
  }
}
