import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ProdSearchComponent } from './prod-search/prod-search.component';
import { NumbersOnlyDirective } from './prod-search.directive';


fdescribe('NumbersOnlyDirective', () => {
  let fixture: ComponentFixture<ProdSearchComponent>;
  let inputelement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbersOnlyDirective, ProdSearchComponent],
    });

    fixture = TestBed.createComponent(ProdSearchComponent);
    inputelement = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const eleref = new ElementRef(null);
    const directive = new NumbersOnlyDirective(eleref);
    expect(directive).toBeTruthy();
  });

  it('should allow numeric keys and Backspace', () => {
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'].forEach((key) => {
      const event = new KeyboardEvent('keydown', { key });
      inputelement.triggerEventHandler('keydown', event);
      expect(event.defaultPrevented).toBe(false);
    });
 });

  it('should prevent non-numeric input', () => {
    inputelement.triggerEventHandler('keydown', { key: 'A' });
    fixture.detectChanges();
    expect(inputelement.nativeElement.value).toBe('');
  });

  
});