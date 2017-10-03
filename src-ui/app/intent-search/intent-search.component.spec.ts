import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentSearchComponent } from './intent-search.component';

describe('IntentSearchComponent', () => {
  let component: IntentSearchComponent;
  let fixture: ComponentFixture<IntentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
