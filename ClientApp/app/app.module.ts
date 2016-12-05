import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { BooksComponent } from './components/books/books.component';
import { BookItemComponent } from './components/books/book-item/book-item.component';
import { BookStoreService } from './components/books/shared/book-store.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        //CounterComponent,
        //FetchDataComponent,
        HomeComponent,
        BooksComponent,
        BookItemComponent
    ],
    providers: [
        BookStoreService
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            //{ path: 'fetch-data', component: FetchDataComponent },
            { path: 'books', component: BooksComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
