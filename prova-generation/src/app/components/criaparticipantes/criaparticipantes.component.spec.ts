import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaparticipantesComponent } from './criaparticipantes.component';

describe('CriaparticipantesComponent', () => {
  let component: CriaparticipantesComponent;
  let fixture: ComponentFixture<CriaparticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaparticipantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaparticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
