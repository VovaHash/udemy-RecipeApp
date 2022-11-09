import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe('Test Recipe 1','This is just a dummy test recipe',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341'),
    new Recipe('Test Recipe ee','Another one',
    'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/4:6/w_3087,h_4631,c_limit/RoastChicken_RECIPE_080420_37993.jpg')
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
