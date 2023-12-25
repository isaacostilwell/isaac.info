import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAsciiAppComponent } from './photo-ascii-app.component';

describe('PhotoAsciiAppComponent', () => {
  let component: PhotoAsciiAppComponent;
  let fixture: ComponentFixture<PhotoAsciiAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoAsciiAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoAsciiAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
