import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostSummaryComponent } from './post-summary.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostSummaryComponent', () => {
  let component: PostSummaryComponent;
  let fixture: ComponentFixture<PostSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PostSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSummaryComponent);
    component = fixture.componentInstance;
    component.post = {};
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
