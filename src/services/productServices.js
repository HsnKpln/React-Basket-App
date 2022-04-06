import axios, { URL } from "../constants/axios";

export const getAllProducts = async () => {
    try {
      const res = await axios.get(URL.products);
      if(res.statusText === 'OK'){
          return res.data
      }
      else{
          return{
              error: 'unavailable data...'
          }
      }
    } catch (error) {
      console.log(error)
        
    }
}