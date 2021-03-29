import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { HelperService } from '../../services/helper.service';
import { TodoService } from '../../todo/services/todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  date = new Date();
  constructor(
    private loggerService: LoggerService,
    private helperService: HelperService,
    private TodoService: TodoService
  ) {}

  ngOnInit(): void {
    this.helperService.whoAmI();
    this.loggerService.logger('cc je suis le cvComponent');
  }

  findSelectedCv(selectedCv: Cv) {
    this.selectedCv = selectedCv;
    this.TodoService.logger();
  }
}
