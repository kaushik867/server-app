import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseinfoComponent } from './databaseinfo.component';

describe('DatabaseinfoComponent', () => {
  let component: DatabaseinfoComponent;
  let fixture: ComponentFixture<DatabaseinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
