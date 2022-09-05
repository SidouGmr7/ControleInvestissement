import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './Services/service.module';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

/* firebase moule */
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';

/* angular materiel module */
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

/* prime NG module */
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TableModule} from 'primeng/table';
import {PasswordModule} from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {KeyFilterModule} from 'primeng/keyfilter';
import {PaginatorModule} from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {TooltipModule} from 'primeng/tooltip';
import {InputMaskModule} from 'primeng/inputmask';
import {RippleModule} from 'primeng/ripple';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FieldsetModule} from 'primeng/fieldset';
import {ChartModule} from 'primeng/chart';
import {CarouselModule} from 'primeng/carousel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {BadgeModule} from 'primeng/badge';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';




/* compenent */
import { AppComponent } from './app.component';
import { NavbarComponent } from './Plugin/navbar/navbar.component';
import { SidenavComponent } from './Plugin/sidenav/sidenav.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterielComponent } from './pages/materiel/materiel.component';
import { ListusersComponent } from './dialog/listusers/listusers.component';
import { UserInfoComponent } from './dialog/user-info/user-info.component';
import { FacteurComponent } from './pages/facteur/facteur.component';
import { PvReceptionComponent } from './pages/pv-reception/pv-reception.component';
import { AddFormComponent } from './dialog/add-form/add-form.component';
import { AllMaterielComponent } from './pages/all-materiel/all-materiel.component';
import { FacteurInfoComponent } from './dialog/Facteur/facteur-info/facteur-info.component';
import { ValidationFacteurComponent } from './dialog/Facteur/validation-facteur/validation-facteur.component';
import { FactorationMaterielComponent } from './dialog/Facteur/factoration-materiel/factoration-materiel.component';
import { FournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { DisplayComponent } from './dialog/display/display.component';
import { AmortissementsComponent } from './pages/amortissements/amortissements.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { AccueilComponent } from './pages/accueil/accueil.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ListusersComponent,
    AdminComponent,
    DashboardComponent,
    PageNotFoundComponent,
    MaterielComponent,
    UserInfoComponent,
    FacteurComponent,
    FacteurInfoComponent,
    PvReceptionComponent,
    AddFormComponent,
    AllMaterielComponent,
    ValidationFacteurComponent,
    FactorationMaterielComponent,
    FournisseurComponent,
    DisplayComponent,
    AmortissementsComponent,
    CategorieComponent,
    AccueilComponent
      ],
  imports: [
    CommonModule,
    ServiceModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    TableModule,
    PasswordModule,
    CalendarModule,
    InputNumberModule,
    KeyFilterModule,
    PaginatorModule,
    CardModule,
    TabViewModule,
    TooltipModule,
    InputMaskModule,
    RippleModule,
    DynamicDialogModule,
    FieldsetModule,
    ChartModule,
    CarouselModule,
    MessagesModule,
    MessageModule,
    BadgeModule,
    OverlayPanelModule,
    ConfirmDialogModule,
  ],
  exports : [
    
  ],
  providers : [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
