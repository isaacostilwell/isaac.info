import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedShellPs1Component } from './shared-shell-ps1.component';

describe('SharedShellPs1Component', () => {
  let component: SharedShellPs1Component;
  let fixture: ComponentFixture<SharedShellPs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedShellPs1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedShellPs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
