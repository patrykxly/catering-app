import { Component } from '@angular/core';
import { FoodSetCardModel } from 'src/app/_shared/_models/foodSetCardModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  foodSets: FoodSetCardModel[] = [
    {
      name: "Fit diet",
      img: "https://superkobiety.com.pl/wp-content/uploads/2018/05/zalety-cateringu-dietetycznego.jpg",
      price: 12,
      description: "This set contains products with high proteins. It is recommended for people who are really active during the day."
    },
    {
      name: "Standard diet",
      img: "https://www.zdrowycatering.pl/wp-content/uploads/2021/03/diety-standard.jpg",
      price: 10,
      description: "Regular diet that can be useful for everyone. It contains all needed macro and micronutrients. Nobody will be unsatisfied after full day of eating."
    },
    {
      name: "Keto diet",
      img: "https://fitering.pl/wp-content/uploads/2019/06/DietaKlasyczna.png",
      price: 15,
      description: "Low carb diet for people who are avoiding carbohydrates. Products included in it make you feel full of energy and efficiently replace benefits of carbo."
    },
  ]

  constructor() { }

}
