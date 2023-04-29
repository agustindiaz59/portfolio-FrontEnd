import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinDeCargaComponent } from './spin-de-carga.component';

describe('SpinDeCargaComponent', () => {
  let component: SpinDeCargaComponent;
  let fixture: ComponentFixture<SpinDeCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinDeCargaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinDeCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
