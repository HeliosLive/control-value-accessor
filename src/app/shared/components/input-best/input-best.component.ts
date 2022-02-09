import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorConnector } from '../../utilities/control-value-accessor-connector';

type InputType = 'text' | 'decimal' | 'numeric';

@Component({
  selector: 'app-input-best',
  templateUrl: './input-best.component.html',
  styleUrls: ['./input-best.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputBestComponent),
    },
  ],
})
export class InputBestComponent extends ControlValueAccessorConnector {
  @Input() type: InputType = 'text';

  constructor(injector: Injector) {
    super(injector);
  }
}
