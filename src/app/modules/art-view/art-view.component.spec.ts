import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtViewComponent } from './art-view.component';
import { PostSummaryComponent } from '../post-summary/post-summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../service/post.service';

describe('ArtViewComponent', () => {
  let component: ArtViewComponent;
  let fixture: ComponentFixture<ArtViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ArtViewComponent,
        PostSummaryComponent
      ],
      providers: [
        PostService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
