import { Fournisseur } from './../interface/fournisseur';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class CommunicationService {

  
  private apiServerUrl = environment.apiBaseUrl;

  Fournisseur! : Fournisseur

  constructor(private http: HttpClient) {}

  public GetPaiment(): Fournisseur{
    this.GetJson().subscribe(
      (Response: Fournisseur) => {
        this.Fournisseur = Response;
        console.log(this.Fournisseur)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    return this.Fournisseur
  }    

  public GetJson(): Observable<Fournisseur>{
    return this.http.get<Fournisseur>(`${this.apiServerUrl}/login`);
  }
  public PostJson(Fournisseur: Fournisseur): Observable<Fournisseur>{
    return this.http.post<Fournisseur>(`${this.apiServerUrl}/login` , Fournisseur);
  }

}
