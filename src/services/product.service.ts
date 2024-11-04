import { SERVER_BASE_URL } from '~/utils/constants/envs';

export const getProducts = async (limit = 30, skip = 0) => {
  const response = await fetch(
    `${SERVER_BASE_URL}/products?limit=${limit}&skip=${skip}`
  );
  const data = await response.json();

  return data;
};
