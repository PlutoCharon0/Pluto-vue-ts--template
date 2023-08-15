import type { apiHandleFn } from '../apiType';

import service from '../service';

export const getProductList: apiHandleFn = async payload => {
  payload.value = await service.get('/products');
};

export const addProduct: apiHandleFn = async (payload, config) => {
  payload.value = await service.post('/products', config);
};
