import { url } from "@/constants/URL";
const axios = require('axios');

export async function getProducts(product_name) {
    try{
        const response = await axios.get(`${url}products/${product_name}`);
        return response
      }
      catch(error){
        throw error.response.data;
      }
}
