import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroCompComponent } from "./components/hero-comp/hero-comp.component";
import { HeroGridComponent } from "./components/hero-grid/hero-grid.component";
import { HttpClientModule } from "@angular/common/http";
import { EditHeroComponent } from "./components/edit-hero/edit-hero.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AtributPipe } from "./pipes/atribut-pipe.model";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroCompComponent,
    HeroGridComponent,
    EditHeroComponent,
    AtributPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ServiceWorkerModule.register("ngsw-worker.js"),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditHeroComponent],
})
export class AppModule {}
