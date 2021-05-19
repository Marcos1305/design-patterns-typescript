import { DatabaseFunction } from './db/database-function';

const databaseClassic = DatabaseFunction;

databaseClassic.add({
  name: 'Marcos',
  age: 20,
});
databaseClassic.add({
  name: 'Marcos2',
  age: 20,
});

export { databaseClassic };
