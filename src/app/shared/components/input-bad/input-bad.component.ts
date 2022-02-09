import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type InputType = 'text' | 'textarea' | 'number' | 'email' | 'password';

@Component({
  selector: 'app-input-bad',
  templateUrl: './input-bad.component.html',
  styleUrls: ['./input-bad.component.scss'],
})
export class InputBadComponent implements OnInit {
  @Input() value!: string;
  @Input() disabled = false;
  @Input() type: InputType = 'text';

  @Output() typing: EventEmitter<string> = new EventEmitter();
  @Output() touched: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onInput(event: any) {
    const value = (event?.target as HTMLInputElement).value;
    this.typing.emit(value);
  }

  onBlur() {
    this.touched.emit();
  }
}
