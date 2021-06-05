import { EnterpriseCar } from '../vehicle/enterprise-car';

import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { CustomerVehicleFactory } from './customer-vehicle-factory';
import { Vehicle } from '../vehicle/vehicle';

export class EnterpriseVehicleCustomerFactory
  implements CustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
