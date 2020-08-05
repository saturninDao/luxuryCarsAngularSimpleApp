import { Component, OnInit } from '@angular/core';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  product1: Product = new Product(
    "Lamborghini Aventador",
  "Elle affiche une puissance de 700 ch et un 0 à 100 km/h en 2,9 secondes seulement. L'Aventador a été en mesure d'abattre le kilomètre départ arrêté en moins de 20 secondes",
  "https://i.pinimg.com/originals/99/cf/e8/99cfe83ea7cfe6d8857768210773a5b0.jpg"
  );

  product2: Product = new Product(
    "Range Rover Sentinel",
  "Parlez de super sécurité dans une voiture! Range Rover a dévoilé un nouveau VUS super sécurisé, le Range Rover Sentinel 2019 entièrement blindé.",
  "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/631/2019/03/08131256/land-rover-sentinel-e1552076008637.jpg?ssl=1"
  );

  product3: Product = new Product(
    "Rolls-Royce Phantom 2020",
  "La Phantom impose le respect, attire les regards et est l’objet d’une admiration sans bornes pour ses occupants. Cette somptueuse berline n’est concurrencée que par la Bentley Mulsanne quant à l’aura de prestige qu’elle dégage.",
  "https://i.gaw.to/vehicles/photos/40/21/402187-2020-rolls-royce-phantom.jpg"
  );

  constructor() { }

  ngOnInit(): void {
  }

}
