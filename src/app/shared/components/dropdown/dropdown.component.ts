import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorConnector } from '../../utilities/control-value-accessor-connector';

import type { FakeDataDetail } from 'src/app/register/register.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DropdownComponent),
    },
  ],
})
export class DropdownComponent extends ControlValueAccessorConnector {
  @Input() data!: FakeDataDetail[];

  constructor(injector: Injector) {
    super(injector);
  }
}
