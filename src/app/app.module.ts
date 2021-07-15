import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { MyHammerConfigService } from './shared/services/my-hammer-config.service';
import { HttpClientModule } from '@angular/common/http';
// making hammer config (3)
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  // providers: [
  //   {
  //     provide: HAMMER_GESTURE_CONFIG,
  //     useClass: MyHammerConfigService,
  //   },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
