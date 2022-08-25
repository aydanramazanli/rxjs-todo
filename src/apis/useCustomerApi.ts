import axios, { AxiosResponse } from 'axios';
import { Customer } from '../interfaces';

const baseApi = 'https://fakestoreapi.com';

export const useCustomerApi = () => {
  const list = (): Promise<AxiosResponse<Customer>> => {
    return axios.get(`${baseApi}/products`); 
  };
  const create = (customer: Customer): Promise<AxiosResponse<Customer>> => {
    return axios.post(`${baseApi}/products`, customer);
  };

  const update = (id: number, customer: Customer): Promise<AxiosResponse<Customer>> => {
    return axios.put(`${baseApi}/products/${id}`, customer);
  };

  const remove = (id: number): Promise<AxiosResponse<Customer>> => {
    return axios.delete(`${baseApi}/products/${id}`);
  };

  return { list, create, update, remove };
};
