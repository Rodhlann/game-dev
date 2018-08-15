import { Component, OnInit } from '@angular/core';
import { GlobalDataServiceService } from '../../service/global-data-service.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public email = this.global.email;
  public description = this.global.description;
  public github = this.global.github;
  public twitter = this.global.twitter;

  constructor(private global: GlobalDataServiceService) {}
}
