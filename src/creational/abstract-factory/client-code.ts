import { IndividualVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';
import { EnterpriseVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';

const entrepriseFactory = new EnterpriseVehicleCustomerFactory();
const individualFactory = new IndividualVehicleCustomerFactory();

const car1 = entrepriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFactory.createVehicle('Celta', 'José');

car1.pickUp();
car2.pickUp();
