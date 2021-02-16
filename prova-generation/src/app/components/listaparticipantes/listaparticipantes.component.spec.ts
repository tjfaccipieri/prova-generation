import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaparticipantesComponent } from './listaparticipantes.component';

describe('ListaparticipantesComponent', () => {
  let component: ListaparticipantesComponent;
  let fixture: ComponentFixture<ListaparticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaparticipantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaparticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
