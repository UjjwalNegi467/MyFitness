export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ba15d35b27msh7bfc3f733d378efp1d7477jsn135fa0c3a756',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ba15d35b27msh7bfc3f733d378efp1d7477jsn135fa0c3a756',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
