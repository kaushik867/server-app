import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptinfoComponent } from './scriptinfo.component';

describe('ScriptinfoComponent', () => {
  let component: ScriptinfoComponent;
  let fixture: ComponentFixture<ScriptinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
