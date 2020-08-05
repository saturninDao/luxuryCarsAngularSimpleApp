import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productsList: Product[] = [
    new Product(
      "Lamborghini Aventador"
      ,"Elle affiche une puissance de 700 ch et un 0 à 100 km/h en 2,9 secondes seulement. L'Aventador a été en mesure d'abattre le kilomètre départ arrêté en moins de 20 secondes",
      "https://i.pinimg.com/originals/99/cf/e8/99cfe83ea7cfe6d8857768210773a5b0.jpg"),
    new Product("Range Rover Sentinel","",""),
    new Product("Rolls-Royce Phantom","",""),
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
