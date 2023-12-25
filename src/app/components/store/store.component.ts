import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css', '../../../styles.css']
})
export class StoreComponent {
	@Input()
	titleStore:string = ''
	@Input()
	consoleStore:string = 'Console PlayStation 5'
	@Input()
	descriptionStore:string = ''
	@Input()
	imagemStore:string = ''
}
