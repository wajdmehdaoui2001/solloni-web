import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesViewComponent } from './annonces-view.component';

describe('AnnoncesViewComponent', () => {
  let component: AnnoncesViewComponent;
  let fixture: ComponentFixture<AnnoncesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncesViewComponent]
    });
    fixture = TestBed.createComponent(AnnoncesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
