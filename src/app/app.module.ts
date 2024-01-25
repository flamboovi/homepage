import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navpage/navbar/navbar.component';
import { NavpageComponent } from './pages/navpage/navpage.component';
import { MainpageComponent } from './pages/navpage/mainpage/mainpage.component';
import { SearchbarComponent } from './pages/navpage/mainpage/searchbar/searchbar.component';
import { RestaurantuserComponent } from './pages/navpage/mainpage/restaurantuser/restaurantuser.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';
import { ThirdpageComponent } from './pages/thirdpage/thirdpage.component';
import { FourthpageComponent } from './pages/fourthpage/fourthpage.component';
import { FifthpageComponent } from './pages/fifthpage/fifthpage.component';
import { SixthpageComponent } from './pages/sixthpage/sixthpage.component';
import { SeventhpageComponent } from './pages/seventhpage/seventhpage.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavpageComponent,
    MainpageComponent,
    SearchbarComponent,
    RestaurantuserComponent,
    SecondpageComponent,
    ThirdpageComponent,
    FourthpageComponent,
    FifthpageComponent,
    SixthpageComponent,
    SeventhpageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
