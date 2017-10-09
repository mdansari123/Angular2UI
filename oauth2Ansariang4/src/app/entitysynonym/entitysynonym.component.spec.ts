import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitysynonymComponent } from './entitysynonym.component';

describe('EntitysynonymComponent', () => {
  let component: EntitysynonymComponent;
  let fixture: ComponentFixture<EntitysynonymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitysynonymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitysynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
