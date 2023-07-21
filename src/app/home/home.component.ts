import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    cities =['tokyo','seul','rokugara'];
      name!:string;
      title = ` hola mundo c:`
    selection!: string;
    criteria=''
    addcities(city:string):void{
      this.cities.push(city);
    }
     
  
      onCityClick(city: string): void {
        this.selection =city;
      }
  
      onClear(): void{
        this.selection = '';
      }
  
  
  
}
  
