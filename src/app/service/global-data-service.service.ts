import { Injectable } from '@angular/core';
import * as data from '../../data/global';

@Injectable()
export class GlobalDataServiceService {
  readonly description = data.description;
  readonly title = data.title;
  readonly email = data.email;
  readonly github = data.github;
  readonly twitter = data.twitter;
}
