import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
