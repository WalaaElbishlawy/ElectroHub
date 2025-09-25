import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_URLS } from '../Constants/api_urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private httpClient = inject(HttpClient);
  private toastr = inject(ToastrService);

  login(username: string, password: string): Observable<any>{
    return this.httpClient.post<any>(API_URLS.login, {
      username,
      password,
    })
    .pipe(
      tap((res: any)=>{
        localStorage.setItem('token', res.accessToken);
        this.toastr.success('Login Successfully!', 'Success');
      })
    )
  }

  logout() {
    localStorage.removeItem('token');
    this.toastr.info('Logged out successfully', 'Info');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
