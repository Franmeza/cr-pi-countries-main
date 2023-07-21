const { Country, Activity } = require("../../db");

const getCountryById = async (countryId) => {
  
  if (countryId.length > 3) throw Error("ID must contain 3 letters");

  const country = await Country.findOne({
    where: {
      id: countryId,
    },
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (!country) throw Error("Country does not exist, please enter a valid ID");
  return country;
};

module.exports = getCountryById;
