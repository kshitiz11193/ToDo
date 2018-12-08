import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicShareComponent } from './music-share.component';

describe('MusicShareComponent', () => {
  let component: MusicShareComponent;
  let fixture: ComponentFixture<MusicShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
