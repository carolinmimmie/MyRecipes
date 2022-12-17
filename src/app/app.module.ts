import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipiesComponent } from './components/recipies/recipies.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { ListComponent } from './components/list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,
    CardComponent,
    ButtonComponent,
    ListComponent,
  ],
  imports: [BrowserModule, MatButtonModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
