import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chiffre-cache',
  templateUrl: './chiffre-cache.component.html',
  styleUrls: ['./chiffre-cache.component.css'],
})
export class ChiffreCacheComponent implements OnInit {
  private chiffreCache = 0;
  constructor(private router: Router, private toaster: ToastrService) {}

  ngOnInit(): void {
    this.chiffreCache = Math.ceil(Math.random() * 10);
    console.log(this.chiffreCache);
  }

  jouer(tentative) {
    if (tentative == this.chiffreCache) {
      this.toaster.success('bravo');
      this.router.navigate(['cv']);
    } else if (tentative < this.chiffreCache) {
      this.toaster.info('plus grand');
    } else {
      this.toaster.info('plus petit');
    }
  }
}
