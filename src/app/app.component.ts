import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  items: Array<any> = [
    {
      name: 'iPhone 13 Pro',
      price: 100, //TODO: USD
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13problue-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1629948813000'
    },
    {
      name: 'iPhone 13 ',
      price: 89,//TODO: USD
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13pink-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1629948812000'
    },
    {
      name: 'iPhone 12',
      price: 79,//TODO: USD
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone12purple-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1629948811000'
    },
    {
      name: 'AirPods',
      price: 15,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-airpodsmagsafe-202110?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1633355782000'
    },
    {
      name: 'Apple Watch',
      price: 15,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s7-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=16329482430000'
    },
    {
      name: 'Apple Watch',
      price: 15,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s7-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=16329482430000'
    }
  ]
}
