import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-better',
  templateUrl: './input-better.component.html',
  styleUrls: ['./input-better.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputBetterComponent,
      multi: true,
    },
  ],
})
export class InputBetterComponent implements ControlValueAccessor {
  onTouched = () => {};
  onChange = (_: any) => {};

  @ViewChild('input', { static: true, read: ElementRef })
  inputElementRef!: ElementRef;

  constructor(private renderer2: Renderer2) {}

  onInputChange() {
    const value = this.inputElementRef.nativeElement.value;
    this.onChange(value);
  }

  onBlur() {
    this.onTouched();
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: string) {
    this.renderer2.setProperty(
      this.inputElementRef.nativeElement,
      'value',
      value
    );
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer2.setProperty(
      this.inputElementRef.nativeElement,
      'disabled',
      isDisabled
    );
  }
}
