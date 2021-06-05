import { IndividualCar } from './../vehicle/individual-car';
import { IndividualCustomer } from './../customer/individual-customer';

import { Customer } from '../customer/customer';
import { CustomerVehicleFactory } from './customer-vehicle-factory';
import { Vehicle } from '../vehicle/vehicle';

export class IndividualVehicleCustomerFactory
  implements CustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
