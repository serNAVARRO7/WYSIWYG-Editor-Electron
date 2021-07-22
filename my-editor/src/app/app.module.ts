import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { NgxWigModule } from 'ngx-wig';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    NgxWigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
