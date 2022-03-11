import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemorComponent } from './component/bemor/bemor.component';
import { BinoComponent } from './component/bino/bino.component';
import { BulimComponent } from './component/bulim/bulim.component';
import { LavozimComponent } from './component/lavozim/lavozim.component';
import { SmenaComponent } from './component/smena/smena.component';
import { XodimComponent } from './component/xodim/xodim.component';
import { XonaComponent } from './component/xona/xona.component';

const routes: Routes = [
  {
    path: "bino",
    component: BinoComponent
  },
  {
    path: "xona",
    component: XonaComponent
  },
  {
    path: "xodim",
    component: XodimComponent
  },
  {
    path: "bemor",
    component: BemorComponent
  },
  {
    path: "lavozim",
    component: LavozimComponent
  },
  {
    path: "smena",
    component: SmenaComponent
  },
  {
    path: "bulim",
    component: BulimComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
