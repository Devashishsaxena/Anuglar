import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './Components/components/components.component';
import { DirectivesDirective } from './Directives/directives.directive';
import { PipesPipe } from './Pipes/pipes.pipe';
import { ProductComponent } from './Components/product/product.component';
import { CounterComponent } from './Components/counter/counter.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TwoWayBindingComponent } from './Components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { InputAutoComponent } from './Components/input-auto/input-auto.component';
import { WishMessageComponent } from './Components/wish-message/wish-message.component';
import { FormsBindingComponent } from './Components/forms-binding/forms-binding.component';
import { SmsAppComponent } from './Components/sms-app/sms-app.component';
import { ShowPasswordComponent } from './Components/show-password/show-password.component';
import { AmountRangeComponent } from './Components/amount-range/amount-range.component';
import { BindingThemeSelectorComponent } from './Components/binding-theme-selector/binding-theme-selector.component';
import { BindingRegistrationComponent } from './Components/binding-registration/binding-registration.component';
import { StructureComponent } from './Components/structure/structure.component';
import { ShopingCardComponent } from './Components/shoping-card/shoping-card.component';
import { ProductsComponent } from './Components/products/products.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { PipeComponent } from './Components/pipe/pipe.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    CounterComponent,
    DirectivesDirective,
    PipesPipe,
    ProductComponent,
    ShoppingComponent,
    TwoWayBindingComponent,
    InputAutoComponent,
    WishMessageComponent,
    FormsBindingComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    BindingThemeSelectorComponent,
    BindingRegistrationComponent,
    StructureComponent,
    ShopingCardComponent,
    ProductsComponent,
    PipesComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
