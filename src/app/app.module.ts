import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule,
  MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatCardModule,
  MatDividerModule, MatExpansionModule, MatTabsModule, MatButtonToggleModule,
  MatBadgeModule, MatChipsModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatTooltipModule, MatTableModule, MatSortModule
} from '@angular/material';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookShelfComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSortModule, //Mat Sorting
    BrowserAnimationsModule, //Mat Sorting - console errors
    MatTooltipModule, //Mat Tooltips
    MatTableModule, //Mat table
    MatRadioModule, //Radio buttons
    MatCheckboxModule, //Checkbox
    MatDatepickerModule, //Date picker
    MatNativeDateModule, //Date picker
    MatButtonModule, // Mat buttons - Date picker open button - mat-raised-button not working
    MatFormFieldModule, //mat-form elements
    MatInputModule, //mat-form elements
    MatIconModule, //Mat-icons
    MatSelectModule, //Dropdown selection
    MatSliderModule,//Slider 
    MatSlideToggleModule, //Slide toggle
    MatMenuModule, //Mat-menu bar 
    MatSidenavModule,
    MatCardModule, //Grid card models
    MatDividerModule, //Mat divider 
    MatExpansionModule, //Expansion bar
    MatTabsModule, //Mat tab groups
    MatButtonToggleModule, //Toggle button
    MatBadgeModule, //Mat badge
    MatChipsModule, //Mat CHips
    MatProgressSpinnerModule, //progress spinner
    MatProgressBarModule, // progress bar

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
