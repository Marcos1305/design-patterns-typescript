export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;

    return /@/.test(value);
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

export class ValidateMinLength extends ValidationComponent {
  constructor(private minLength: number) {
    super();
  }

  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return value.length >= this.minLength;
  }
}

export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) {
        return false;
      }
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();
const validateMinLength = new ValidateMinLength(5);

const validationComposite = new ValidationComposite();
validationComposite.add(
  validateEmail,
  validateNumber,
  validateString,
  validateMinLength,
);

console.log(validationComposite);
console.log(validationComposite.validate(10000));
