import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceSingleViewComponent } from './annonce-single-view.component';

describe('AnnonceSingleViewComponent', () => {
  let component: AnnonceSingleViewComponent;
  let fixture: ComponentFixture<AnnonceSingleViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnonceSingleViewComponent]
    });
    fixture = TestBed.createComponent(AnnonceSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
