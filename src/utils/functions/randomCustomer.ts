import faker from 'faker';
import { Customer } from '../../interfaces';

export const randomCustomer = (omitKeys: []): Customer => {
  const object: Customer = {
    id: faker.datatype.number(),
    title:faker.name.findName(),
    price:faker.datatype.number(),
  };

  omitKeys.forEach((key) => {
    delete object[key];
  });

  return object;
};
