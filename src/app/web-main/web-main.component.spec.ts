import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMainComponent } from './web-main.component';

describe('WebMainComponent', () => {
  let component: WebMainComponent;
  let fixture: ComponentFixture<WebMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebMainComponent]
    });
    fixture = TestBed.createComponent(WebMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
