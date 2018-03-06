import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpService } from './service/http.service';
import { ElModule } from 'element-angular';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './service/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ElModule.forRoot(),
    NgxEchartsModule,
    HttpClientModule
  ],
  providers: [
    MyHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
