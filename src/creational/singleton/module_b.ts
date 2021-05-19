import { DatabaseFunction } from './db/database-function';

const databaseClassic = DatabaseFunction;
databaseClassic.add({
  name: 'Rafael',
  age: 20,
});
databaseClassic.add({
  name: 'Rafael2',
  age: 20,
});

databaseClassic.show();
