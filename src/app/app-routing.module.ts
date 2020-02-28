import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HumanComponent } from './enterprise/human/human.component';
import { AssetComponent } from './enterprise/asset/asset.component';
import { CreateHumanComponent } from './enterprise/human/operation/create-human/create-human.component';
import { ReadHumanComponent } from './enterprise/human/operation/read-human/read-human.component';
import { UpdateHumanComponent } from './enterprise/human/operation/update-human/update-human.component';
import { DetailHumanComponent } from './enterprise/human/operation/detail-human/detail-human.component';
import { CreateAssetComponent } from './enterprise/asset/operation/create-asset/create-asset.component';
import { ReadAssetComponent } from './enterprise/asset/operation/read-asset/read-asset.component';
import { UpdateAssetComponent } from './enterprise/asset/operation/update-asset/update-asset.component';
import { DetailAssetComponent } from './enterprise/asset/operation/detail-asset/detail-asset.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { LoginComponent } from './main/login/login.component';


const routes: Routes = [

  // {path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },

  { path: 'enterprise', component: EnterpriseComponent },
  
  { path: 'employees', component: HumanComponent },
  { path: 'create-employee', component: CreateHumanComponent },
  { path: 'listing-employees', component: ReadHumanComponent },
  { path: 'edit-employee/:id', component: UpdateHumanComponent },
  { path: 'details-employee/:id', component: DetailHumanComponent },

  { path: 'materials', component: AssetComponent },
  { path: 'create-material', component: CreateAssetComponent },
  { path: 'listing-materials/', component: ReadAssetComponent },
  { path: 'edit-material/:id', component: UpdateAssetComponent },
  { path: 'details-material/:id', component: DetailAssetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
