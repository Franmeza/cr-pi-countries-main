const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountryByName = async (query) => {
  
  const countries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${query}%`,
      },
    },
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  // if (countries.length === 0) throw Error("Country name does not exist");
  return countries;
};

module.exports = getCountryByName;
