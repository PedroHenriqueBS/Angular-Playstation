import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../../../styles.css'],
})
export class MenuComponent{

	menuAbrir() {
		let menu = document.querySelector<HTMLElement>('.menu__abrir')!;
		let animationMenu = document.querySelector<HTMLElement>('.menu__click-jogos')!;
		let jogos = document.querySelector<HTMLElement>('#jogos')!;
		let flecha = document.querySelector<HTMLElement>('.flecha')!;

		if(jogos) {
			if (menu.style.display == 'none') {
				menu.style.display = 'block';
				animationMenu.classList.add('abrir')
				flecha.classList.add('open')
			} else {
				menu.style.display = 'none';
				flecha.classList.remove('open')
				animationMenu.classList.remove('abrir') }}}

	clickMenu() {
		let burger = document.querySelector<HTMLElement>('#menu__ul')!;

		if (burger.style.display == 'none') {
			burger.style.display = 'block';
		} else {
			burger.style.display = 'none'
		}

}

	constructor () {

	}

}
