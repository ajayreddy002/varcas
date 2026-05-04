import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularTrainigComponent } from './angular-trainig/angular-trainig.component';
import { ContactComponent } from './contact/contact.component';
import { CssTrainigComponent } from './css-trainig/css-trainig.component';
import { HomeComponent } from './home/home.component';
import { HtmlTrainigComponent } from './html-trainig/html-trainig.component';
import { NodejsTrainigComponent } from './nodejs-trainig/nodejs-trainig.component';
import { ReactTrainigComponent } from './react-trainig/react-trainig.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { StaffingComponent } from './staffing/staffing.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'web-develop', component: WebDevelopmentComponent},
  {path: 'staffing', component: StaffingComponent},
  {path: 'software-develop', component: SoftwareDevComponent},
  {path: 'angular-training', component: AngularTrainigComponent},
  {path: 'html-training', component: HtmlTrainigComponent},
  {path: 'css-training', component: CssTrainigComponent},
  {path: 'react-training', component: ReactTrainigComponent},
  {path: 'nodejs-training', component: NodejsTrainigComponent},
  {path: 'fullstack', redirectTo: 'nodejs-training', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: '***', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
