import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmetResultsComponent } from './investmet-results.component';

describe('InvestmetResultsComponent', () => {
  let component: InvestmetResultsComponent;
  let fixture: ComponentFixture<InvestmetResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmetResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmetResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
