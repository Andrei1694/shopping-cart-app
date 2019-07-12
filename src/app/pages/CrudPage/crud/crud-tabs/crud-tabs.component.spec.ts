import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTabsComponent } from './crud-tabs.component';

describe('CrudTabsComponent', () => {
  let component: CrudTabsComponent;
  let fixture: ComponentFixture<CrudTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
