import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    try {
      const objParams={
        headers: {
          'X-RapidAPI-Key': '5892d51345mshb7a1481730205f9p18004djsn5a8308096ad7',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }}

      if(sw===null && ne===null){
        objParams.params={
          bl_latitude: '41.991992',
          tr_latitude: '42.006993',
          bl_longitude: '21.411086',
          tr_longitude: '21.442457'
        }
      } else {
        objParams.params={
          bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
        }
      }

        const { data: {data} } = await axios.get(URL, objParams);

        return data;
    } catch (error) {
        console.log(error);
    }
}