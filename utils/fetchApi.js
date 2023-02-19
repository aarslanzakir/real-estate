import axios from "axios";

export const baseUrl ='https://bayut.p.rapidapi.com'



export const fetchApi =async (url)=>{
    const { data } =await axios.get((url),{

        headers: {
            'X-RapidAPI-Key':'d87a8bac14msh68af495030a673ep1ab21cjsn29c0822fec96',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}