import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule,ReactiveFormsModule} from  '@angular/forms'
import { AgGridModule } from 'ag-grid-angular';
import { MainComponentComponent } from './main-component/main-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing..module';
//import{SegmentComponent} from 'src/app/segment';
import{SegmentComponent} from './segment/segment.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponentComponent,
    MenuComponentComponent,
    HomeComponent,
    AdminComponent,
    SegmentComponent,
    //TabComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
