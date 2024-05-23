import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .then(res => res.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
