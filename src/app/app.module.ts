import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { IngredientComponent } from './ingredient/ingredient.component';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import { ShopingListEditComponent } from './shopping-list/shoping-list-edit/shoping-list-edit.component';
import {RecipeItemComponent} from "./recipe/recipe-list/recipe-item/recipe-item.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "./recipe/recipe-list/recipe-list.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientComponent,
    ShoppingListComponent,
    ShopingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
