const countriesLoader = async (axios, Country) => {
  const URL = "http://localhost:5000/countries";

  try {
    const response = await axios.get(URL);

    const countries = response.data;

    const countriesData = countries.map((country) => {
      
      return {
        id: country.cca3,
        name: country.name.common,
        flagImage: country.flags.png,
        coatOfArms: country.coatOfArms.png,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0]:'-',
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });
    const countriesCreated = await Country.bulkCreate(countriesData); 
    return countriesCreated;

  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

module.exports = countriesLoader;
