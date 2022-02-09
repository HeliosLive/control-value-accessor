import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorConnector } from '../../utilities/control-value-accessor-connector';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioComponent),
    },
  ],
})
export class RadioComponent extends ControlValueAccessorConnector {
  @Input() value!: number;

  constructor(injector: Injector) {
    super(injector);
  }
}
