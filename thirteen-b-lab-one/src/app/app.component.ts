import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thirteen-b-lab-one';


  public openCart:boolean = false;
  public cantProducts:number = 0;

  public cart(){
    this.openCart = !this.openCart;
  }

}
