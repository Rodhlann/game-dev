import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeViewComponent } from './code-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PostSummaryComponent } from '../post-summary/post-summary.component';
import { PostService } from '../../service/post.service';

describe('CodeViewComponent', () => {
  let component: CodeViewComponent;
  let fixture: ComponentFixture<CodeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CodeViewComponent,
        PostSummaryComponent
      ],
      providers: [
        PostService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
