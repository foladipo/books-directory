import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksService } from './books.service';
import { BookProfileComponent } from './book-profile/book-profile.component';
import { ArrayToCommaSeparatedList } from './custom-pipes/array-to-comma-separated-list';
import { TruncateAfter } from './custom-pipes/truncate-after';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDetailComponent,
    BookProfileComponent,
    ArrayToCommaSeparatedList,
    TruncateAfter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
