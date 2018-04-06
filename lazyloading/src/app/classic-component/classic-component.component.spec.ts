import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicComponentComponent } from './classic-component.component';

describe('ClassicComponentComponent', () => {
  let component: ClassicComponentComponent;
  let fixture: ComponentFixture<ClassicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
