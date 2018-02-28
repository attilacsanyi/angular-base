import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { combineReducers, StoreModule } from '@ngrx/store';

import { reducers as coreReducers } from '@core/store';

import { reducers } from '@dashboard/store';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [StoreModule.forRoot({ core: combineReducers(coreReducers), dashboard: combineReducers(reducers) } as any)],
        declarations: [DashboardComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
