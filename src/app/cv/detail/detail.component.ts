import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toaster.success(
        `Félicitations ${this.cv.name} ${this.cv.firstname} a été préslectionné`
      );
    } else {
      this.toaster.warning(
        `${this.cv.name} ${this.cv.firstname} est déjà préslectionné`
      );
    }
  }
}
