import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent
  implements AfterContentChecked, ControlValueAccessor
{
  @Input() value: any;
  @Input() ngModel: any;

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('flInput') flInput!: ElementRef;

  public writeValue(obj: any) {
    this.ngModel = obj;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}

  propagateChange = (_: any) => {};

  ngAfterContentChecked(): void {
    this.value = this.ngModel ?? this.value;
  }

  typing(event: any) {
    const value = (event?.target as HTMLInputElement).value;
    this.setSelectedValue(value);
  }

  setSelectedValue(val: string | number) {
    this.value = val ?? !this.value;
    this.ngModel = this.value;
    this.ngModelChange.emit(val);
    this.propagateChange(val);
  }

  setValueManually(value: string | number) {
    this.setSelectedValue(value);
  }
}
