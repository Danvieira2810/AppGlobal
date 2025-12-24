import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assistencia } from './assistencia';

describe('Assistencia', () => {
  let component: Assistencia;
  let fixture: ComponentFixture<Assistencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assistencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assistencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
