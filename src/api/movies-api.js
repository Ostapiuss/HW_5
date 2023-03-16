import axios from "axios";

const LICENSE_KEY = '17c5a5de30466e42172be6812ea6018f';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const getTrends = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day?api_key=${LICENSE_KEY}`);
    return data;
  }catch (err) {
    console.log(err)
  }
}

export const getMovie = async (id) => {
  try {
    const { data } = await axios.get(`movie/${id}?api_key=${LICENSE_KEY}`);
    return data;
  }catch (err) {
    console.log(err)
  }
}

