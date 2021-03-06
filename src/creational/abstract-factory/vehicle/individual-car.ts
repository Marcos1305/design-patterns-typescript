import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class IndividualCar implements Vehicle {
  constructor(public name: string, public customer: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} (Individual)`,
    );
  }
}
