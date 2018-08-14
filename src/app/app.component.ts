import { Component, Renderer2, ElementRef } from '@angular/core';
import { GlobalDataServiceService } from './service/global-data-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = this.global.title;
  public email = this.global.email;
  public description = this.global.description;
  public github = this.global.github;
  public twitter = this.global.twitter;

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
      console.log(event.url);
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
