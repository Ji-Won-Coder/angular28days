import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template:`
  <ul >
      <li (click)="onCityClick(city)" [ngClass]="{'selected': city === selection}">{{city}}</li>>
      {{city | titlecase}}
    </ul>
    
  `,
  styleUrls: ['./cities.component.scss'],

  changeDetection:ChangeDetectionStrategy.OnPush

})
export class CitiesComponent {
  @Input() city!:string;
  @Input() selection!:string;
  @Output() cityClickEvent = new EventEmitter<string>();

  onCityClick(click:string):void{
    //emit Output
    this.cityClickEvent.emit(this.city);
  }


}
