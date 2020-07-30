import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let debug: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(EditComponent);
      
      component = fixture.componentInstance;
      debug = fixture.debugElement.query(By.css('form'));
      el = debug.nativeElement;
    });
  }));
  it('form should be invalid', async(() => {
    component.pokemonForm.controls['name'].setValue('');
    component.pokemonForm.controls['name'].setValue('');
    component.pokemonForm.controls['name'].setValue('');
    expect(component.pokemonForm.valid).toBeFalsy();
    
  }))
});
