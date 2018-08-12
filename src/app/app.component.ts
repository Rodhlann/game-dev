import { Component, Renderer2, ElementRef } from '@angular/core';
import { GlobalDataServiceService } from './service/global-data-service.service';

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

  constructor(
    private global: GlobalDataServiceService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  public setFocus(event: any) {
    const elements = this.elementRef.nativeElement.querySelectorAll('.selected');
    elements.forEach((element: any) => {
      this.renderer.removeClass(element, 'selected');
    });
    this.renderer.addClass(event.target, 'selected');
  }
}
