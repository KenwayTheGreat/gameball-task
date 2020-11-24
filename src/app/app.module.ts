import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { GamePlanComponent } from './game-plan/game-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideMenuComponent,
    GamePlanComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
