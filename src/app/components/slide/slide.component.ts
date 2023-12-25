import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css' , '../../../styles.css']
})
export class SlideComponent {
	@Input()
	imgSlide:string = ''
}
