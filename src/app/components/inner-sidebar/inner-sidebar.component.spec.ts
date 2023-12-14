import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSidebarComponent } from './inner-sidebar.component';

describe('InnerSidebarComponent', () => {
  let component: InnerSidebarComponent;
  let fixture: ComponentFixture<InnerSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerSidebarComponent]
    });
    fixture = TestBed.createComponent(InnerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
