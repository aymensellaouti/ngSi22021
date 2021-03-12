import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private loggerService: LoggerService) {}

  whoAmI() {
    this.loggerService.logger('je suis le helper Service');
  }
}
