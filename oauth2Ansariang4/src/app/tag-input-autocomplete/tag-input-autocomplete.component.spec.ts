import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInputAutocompleteComponent } from './tag-input-autocomplete.component';

describe('TagInputAutocompleteComponent', () => {
  let component: TagInputAutocompleteComponent;
  let fixture: ComponentFixture<TagInputAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagInputAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInputAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
