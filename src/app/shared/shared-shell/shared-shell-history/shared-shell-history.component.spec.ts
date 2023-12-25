import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedShellHistoryComponent } from './shared-shell-history.component';

describe('SharedShellHistoryComponent', () => {
  let component: SharedShellHistoryComponent;
  let fixture: ComponentFixture<SharedShellHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedShellHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedShellHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
