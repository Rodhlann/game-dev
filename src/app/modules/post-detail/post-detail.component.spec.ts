import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../service/post.service';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MarkdownModule, RouterTestingModule],
      declarations: [ PostDetailComponent, PageNotFoundComponent ],
      providers: [PostService, MarkdownService, MarkedOptions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
