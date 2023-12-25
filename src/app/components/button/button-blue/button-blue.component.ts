import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-blue',
  templateUrl: './button-blue.component.html',
  styleUrls: ['./button-blue.component.css']
})
export class ButtonBlueComponent {
	@Input()
	textButton:string = ''
}
