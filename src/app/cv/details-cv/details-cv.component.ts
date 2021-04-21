import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((qp) => console.log(qp));
    this.activatedRoute.params.subscribe((parametres) => {
      this.cv = this.cvService.getCvById(+parametres.id);
      if (!this.cv) {
        this.toaster.warning(
          'Cv innexistant, prière de passer par le bouton détail'
        );
        this.router.navigate(['cv']);
      }
    });
  }

  deleteCv() {
    this.toaster.success(
      `Le cv de ${this.cv.firstname} ${this.cv.name} a été supprimé avec succès`
    );
    this.cvService.deleteCv(this.cv);
    this.router.navigate(['cv']);
  }
}
