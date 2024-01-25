import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  datas=[
    [
      'Get Help',
      'Buy gift cards',
      'Add your restaurant',
      'Sign up to deliver',
      'Create a business account',
      'Promotions'
    ],
    [
      'Restaurants near me',
      'View all cities',
      'View all countries',
      'Pickup near me',
      'About Us',
      'English'
    ]
  ]
}
