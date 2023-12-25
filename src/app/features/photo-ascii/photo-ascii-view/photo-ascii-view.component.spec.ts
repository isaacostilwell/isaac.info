import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAsciiViewComponent } from './photo-ascii-view.component';

describe('PhotoAsciiViewComponent', () => {
  let component: PhotoAsciiViewComponent;
  let fixture: ComponentFixture<PhotoAsciiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoAsciiViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoAsciiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
