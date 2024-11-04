import { SERVER_BASE_URL } from '~/utils/constants/envs';

export const getProducts = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/products`);
  const data = await response.json();

  console.log('data', data);

  return data;
};
