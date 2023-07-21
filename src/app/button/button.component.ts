import { ChangeDetectionStrategy, Component,Input} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color':color}">{{label}}</button>
  <!--<p>cunt :{{counterRender()}}</p>-->
  `,
  styleUrls: ['./button.component.scss'],
 changeDetection:ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() color!: string;
    @Input() label!: string;
    @Input() selection!:string;

    //counterRender():boolean{
    //  console.log('render form')
    //  return true;
    //}

}
