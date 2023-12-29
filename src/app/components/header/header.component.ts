import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../styles.css']
})

export class HeaderComponent {
	@Input()
	imageHeader:string = '../../../assets/img/nba.page2.jpg'
	@Input()
	titleHeader:string = ''
	@Input()
	descriptionHeader:string = ''
}
