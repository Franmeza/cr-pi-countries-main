const { Router } = require("express");
const getCountries = require("../controllers/countries/getCountries");
const getCountryById = require("../controllers/countries/getCountryById");
const getCountryByName = require("../controllers/countries/getCountryByName");

const countriesRouter = Router();

countriesRouter.get("/", async (req, res) => {
  const { name } = req.query;
  
  try {
    const result = name
      ? await getCountryByName(name)
      : await getCountries();
      // if(result.length === 0) {
      //   res.status(400).json({result:result, message:"Country name does not exist"})
      //   // throw Error("No country/ies found")
      // }else{
        
      // }
      res.status(200).json(result);
    } catch (error) {     
     
    res.status(400).json({ error: error.message });
  }
});

countriesRouter.get("/:countryId", async (req, res) => {
  const { countryId } = req.params;
  try {
    if(!countryId) throw Error ("Please enter an ID")
    const country = await getCountryById(countryId);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).send('Country does not exist');
  }
});

module.exports = countriesRouter;
