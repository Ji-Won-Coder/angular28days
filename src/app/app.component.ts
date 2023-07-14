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
  seletion: string | undefined;

  
   
    onCityClick(city: string): void {
      this.seletion =city;
    }

    onClear(): void{
      this.seletion = '';
    }

}
