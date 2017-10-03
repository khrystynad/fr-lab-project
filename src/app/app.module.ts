import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// App modules goes here
import { ProfilePageModule } from './profile-page/profile-page.module';
import { SharedModule } from './shared/shared.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { WildcardRoutingModule } from './wildcard-routing/wildcard-routing.module';

// App guards goes here
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

// App components goes here
import { RedactorPageComponent } from './redactor-page/redactor-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AppComponent } from './app.component';
//import { AddDesignComponent } from './admin-page/add-menu/add-design/add-design.component';
//import { AddProductComponent } from './admin-page/add-menu/add-product/add-product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { ReCaptchaModule } from 'angular2-recaptcha';

// homepage components
import { HomepageComponent } from './homepage/homepage.component';
import { PosterComponent } from './homepage/poster/poster.component';
//import { SearchComponent } from './homepage/search/search.component';
//import { FiltersComponent } from './homepage/filters/filters.component';
//import { AddToBasketBtnComponent } from './homepage/add-to-basket-btn/add-to-basket-btn.component';
// import { ViewOneProductComponent } from './homepage/view-one-product/view-one-product.component';
//import { ViewAllProductsComponent } from './homepage/view-all-products/view-all-products.component';



// Materials modules goes here
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Services goes here
import { UserService } from './services/user.service';
import { ProductsListService } from './services/products-list.service';
import { DesignService } from './services/design.service';
import { AdminService } from './services/admin.service';
import { MakeOrderService } from './services/make-order.service';
import { OrderService } from './services/order-page.service';
import { CommonService } from './services/common.service'

//pagination
import { NgxPaginationModule } from 'ngx-pagination';

//scrolling
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

@NgModule({
  declarations: [
    AppComponent,
    RedactorPageComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    //AddDesignComponent,
    //AddProductComponent,
    DialogComponent,
    HomepageComponent,
    PosterComponent,
    //FiltersComponent,
    //SearchComponent,
    //AddToBasketBtnComponent,
    // ViewOneProductComponent,
    //ViewAllProductsComponent,
    PosterComponent,
    DialogComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    AdditionalInfoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    ProfilePageModule,
    AdminPageModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    WildcardRoutingModule,
    ReCaptchaModule
  ],
  providers: [
    MdIconRegistry,
    UserService,
    ProductsListService,
    DesignService,
    AdminService,
    AuthGuard,
    AdminGuard,
    MakeOrderService,
    OrderService,
    CommonService
  ],
  entryComponents: [
    DialogComponent,
    // SizeDialogComponent
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [MaterialModule]
})
export class AppModule { }
