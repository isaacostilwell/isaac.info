import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedShellLayoutComponent } from './shared-shell-layout.component';

describe('SharedShellLayoutComponent', () => {
  let component: SharedShellLayoutComponent;
  let fixture: ComponentFixture<SharedShellLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedShellLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedShellLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
