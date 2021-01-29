import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({ //
  imports: [
    BrowserModule.withServerTransition({appId: 'frontendtest'}),
    TransferHttpCacheModule,
    HttpClientModule,
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule {}