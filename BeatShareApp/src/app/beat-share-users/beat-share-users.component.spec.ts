import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatShareUsersComponent } from './beat-share-users.component';

describe('BeatShareUsersComponent', () => {
  let component: BeatShareUsersComponent;
  let fixture: ComponentFixture<BeatShareUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatShareUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatShareUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
