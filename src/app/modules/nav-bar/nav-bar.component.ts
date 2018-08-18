import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { GlobalDataServiceService } from '../../service/global-data-service.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public title = this.global.title;
  private buttonElements;

  constructor(
    private global: GlobalDataServiceService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
  ) {
    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const buttonElements = this.elementRef.nativeElement.querySelectorAll('.nav-content');
      buttonElements.forEach((element: any) => {
        if (event.url.indexOf(element.textContent.toLowerCase()) !== -1) {
          this.renderer.addClass(element, 'selected');
        } else {
          this.renderer.removeClass(element, 'selected');
        }
      });
      if (event.url === '/') {
        this.renderer.addClass(buttonElements[0], 'selected');
      }
    });
  }
}
