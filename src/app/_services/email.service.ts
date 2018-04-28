import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  createMail(name: string, email: string, message: string) {
    return this.http.get(`https://www.hipenco.com/api.php?name=${name}&email=${email}&message=${message}`);
  }

}
