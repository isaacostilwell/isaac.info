import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAsciiSidebarComponent } from './photo-ascii-sidebar.component';

describe('PhotoAsciiSidebarComponent', () => {
  let component: PhotoAsciiSidebarComponent;
  let fixture: ComponentFixture<PhotoAsciiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoAsciiSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoAsciiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
