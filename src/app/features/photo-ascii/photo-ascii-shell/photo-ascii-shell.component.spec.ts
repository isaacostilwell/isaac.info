import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAsciiShellComponent } from './photo-ascii-shell.component';

describe('PhotoAsciiShellComponent', () => {
  let component: PhotoAsciiShellComponent;
  let fixture: ComponentFixture<PhotoAsciiShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoAsciiShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoAsciiShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
