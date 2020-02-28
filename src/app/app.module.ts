import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { HumanComponent } from './enterprise/human/human.component';
import { MainHumanComponent } from './enterprise/human/main-human/main-human.component';
import { HeaderHumanComponent } from './enterprise/human/header-human/header-human.component';
import { DetailAssetComponent } from './enterprise/asset/operation/detail-asset/detail-asset.component';
import { HeaderAssetComponent } from './enterprise/asset/header-asset/header-asset.component';
import { CreateHumanComponent } from './enterprise/human/operation/create-human/create-human.component';
import { ReadHumanComponent } from './enterprise/human/operation/read-human/read-human.component';
import { DetailHumanComponent } from './enterprise/human/operation/detail-human/detail-human.component';
import { MainAssetComponent } from './enterprise/asset/main-asset/main-asset.component';
import { CreateAssetComponent } from './enterprise/asset/operation/create-asset/create-asset.component';
import { ReadAssetComponent } from './enterprise/asset/operation/read-asset/read-asset.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { HeaderHomeComponent } from './main/home/header-home/header-home.component';
import { MainHomeComponent } from './main/home/main-home/main-home.component';
import { UpdateHumanComponent } from './enterprise/human/operation/update-human/update-human.component';
import { UpdateAssetComponent } from './enterprise/asset/operation/update-asset/update-asset.component';
import { FooterComponent } from './main/footer/footer.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { HeaderEnterpriseComponent } from './enterprise/header-enterprise/header-enterprise.component';
import { MainEnterpriseComponent } from './enterprise/main-enterprise/main-enterprise.component';
import { LoginComponent } from './main/login/login.component';
import { MainLoginComponent } from './main/login/main-login/main-login.component';
import { CardLoginComponent } from './main/login/card-login/card-login.component';
import { HeaderLoginComponent } from './main/login/header-login/header-login.component';
import { AssetComponent } from './enterprise/asset/asset.component';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    MainHumanComponent,
    HeaderHumanComponent,
    DetailAssetComponent,
    HeaderAssetComponent,
    CreateHumanComponent,
    ReadHumanComponent,
    DetailHumanComponent,
    MainAssetComponent,
    CreateAssetComponent,
    ReadAssetComponent,
    MainComponent,
    HomeComponent,
    HeaderHomeComponent,
    MainHomeComponent,
    UpdateHumanComponent,
    UpdateAssetComponent,
    FooterComponent,
    EnterpriseComponent,
    HeaderEnterpriseComponent,
    MainEnterpriseComponent,
    LoginComponent,
    MainLoginComponent,
    CardLoginComponent,
    HeaderLoginComponent,
    AssetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
