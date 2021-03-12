import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngifComponent } from './testngif.component';

describe('TestngifComponent', () => {
  let component: TestngifComponent;
  let fixture: ComponentFixture<TestngifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestngifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
