@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logger(message: unknown): void {
    console.log(message);
  }
}
