import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface FakeDataDetail {
  id: number;
  text: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  //#region bad form binding example
  fakeDisable = false;
  //#endregion

  experienceData: FakeDataDetail[] = [
    {
      id: 1,
      text: '1 year',
    },
    {
      id: 2,
      text: '2-3 years',
    },
    {
      id: 3,
      text: '~5 years',
    },
    {
      id: 4,
      text: '~10 years',
    },
  ];

  stackData: FakeDataDetail[] = [
    {
      id: 1,
      text: 'Angular',
    },
    {
      id: 2,
      text: 'React',
    },
    {
      id: 3,
      text: 'Vue',
    },
    {
      id: 4,
      text: 'other',
    },
  ];

  locationData: FakeDataDetail[] = [
    {
      id: 1,
      text: 'Amsterdam',
    },
    {
      id: 2,
      text: 'Barcelona',
    },
    {
      id: 3,
      text: 'Other',
    },
  ];

  genderData: FakeDataDetail[] = [
    {
      id: 1,
      text: 'Male',
    },
    {
      id: 2,
      text: 'Female',
    },
    {
      id: 3,
      text: 'rather not to say',
    },
  ];
  constructor() {}

  ngOnInit() {
    this.buildForm();
    this.subs();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('register form ', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  onDisable() {
    const disability = this.registerForm.disabled;
    if (disability) {
      this.registerForm.enable();
    } else {
      this.registerForm.disable();
    }

    //#region bad form binding example
    this.fakeDisable = this.registerForm?.disabled;
    //#endregion
  }

  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get experience(): FormControl {
    return this.registerForm.get('experience') as FormControl;
  }

  get stack(): FormControl {
    return this.registerForm.get('stack') as FormControl;
  }

  get salary(): FormControl {
    return this.registerForm.get('salary') as FormControl;
  }

  get location(): FormControl {
    return this.registerForm.get('location') as FormControl;
  }

  get gender(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }

  private buildForm(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      }),
      experience: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'change',
      }),
      stack: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'change',
      }),
      salary: new FormControl('', {
        validators: [
          Validators.required,
          Validators.min(1000),
          Validators.max(10000),
        ],
        updateOn: 'blur',
      }),
      location: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'change',
      }),
      gender: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'change',
      }),
    });
  }

  private subs() {
    this.registerForm.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

  //#region bad form binding example

  onInput(value: string, field: string) {
    this.registerForm.controls[field].patchValue(value, {
      emitEvent: true,
    });
  }

  onTouch(field: string) {
    this.registerForm.controls[field].markAsTouched();
  }
  //#endregion
}
