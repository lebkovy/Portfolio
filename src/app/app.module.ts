import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {OfferComponent} from './components/offer/offer.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MobileAppsComponent} from './components/mobile-apps/mobile.apps.component';
import {LandingComponent} from './components/landing/landing.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {AboutComponent} from './components/about/about.component';
import {QuoteComponent} from './components/about/quote/quote.component';
import {LatestAppComponent} from './components/latest-app/latest-app.component';
import {HomeComponent} from './components/home/home.component';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
    { path: '', component: HomeComponent},
    { path: 'latest', component: LatestAppComponent },
    { path: '**', redirectTo: ''}
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        OfferComponent,
        OfferComponent,
        MobileAppsComponent,
        LandingComponent,
        FooterComponent,
        AboutComponent,
        QuoteComponent,
        LatestAppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        RouterModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
