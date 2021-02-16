import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaturmasComponent } from './listaturmas.component';

describe('ListaturmasComponent', () => {
  let component: ListaturmasComponent;
  let fixture: ComponentFixture<ListaturmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaturmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaturmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
