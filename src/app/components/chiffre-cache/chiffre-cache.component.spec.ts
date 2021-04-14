import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffreCacheComponent } from './chiffre-cache.component';

describe('ChiffreCacheComponent', () => {
  let component: ChiffreCacheComponent;
  let fixture: ComponentFixture<ChiffreCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiffreCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffreCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
