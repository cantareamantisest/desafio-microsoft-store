import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { MiniCardComponent } from '../../components/mini-card/mini-card.component';
import { TitleComponent } from '../../components/title/title.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TitleComponent,
    MiniCardComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
})
export class HomeModule {}
