import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputFormComponent } from './components/form/input/input.component';
import { ResultPageComponent } from './components/pages/result/result.component';

const routes: Routes = [
  { path: '', component: InputFormComponent }, // Input Form
  { path: 'result/:website', component: ResultPageComponent }, // Result Page
  { path: 'report/:website', component: ResultPageComponent }, // Result Page
];

@NgModule({
  declarations: [AppComponent, InputFormComponent, ResultPageComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
