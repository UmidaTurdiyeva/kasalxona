import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BinoComponent } from './component/bino/bino.component';
import { XonaComponent } from './component/xona/xona.component';
import { XodimComponent } from './component/xodim/xodim.component';
import { BemorComponent } from './component/bemor/bemor.component';
import { LavozimComponent } from './component/lavozim/lavozim.component';
import { SmenaComponent } from './component/smena/smena.component';
import { BulimComponent } from './component/bulim/bulim.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { material_import } from './material-import-list';
import { ConfirmDialogComponent } from './shared/confirm-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    BinoComponent,
    XonaComponent,
    XodimComponent,
    BemorComponent,
    LavozimComponent,
    SmenaComponent,
    BulimComponent,
    ConfirmDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material_import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
