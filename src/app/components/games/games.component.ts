import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css', '../../../styles.css'],
})
export class GamesComponent {
	@Input()
	imgGame:string = ''
	@Input()
	nameGame:string = ''
}
