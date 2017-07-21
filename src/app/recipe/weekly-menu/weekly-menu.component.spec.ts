import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ImagePipe } from '../pipes/image.pipe';
import { RecipeService } from '../services/recipe.service';
import { WeeklyMenuComponent } from './weekly-menu.component';

describe('WeeklyMenuComponent', () => {
  let component: WeeklyMenuComponent;
  let fixture: ComponentFixture<WeeklyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyMenuComponent, ImagePipe ],
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      providers: [RecipeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
