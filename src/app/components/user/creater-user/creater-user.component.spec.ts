import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterUserComponent } from './creater-user.component';

describe('CreaterUserComponent', () => {
  let component: CreaterUserComponent;
  let fixture: ComponentFixture<CreaterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
