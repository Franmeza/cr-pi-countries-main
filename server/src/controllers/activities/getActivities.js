const { Activity } = require("../../db");

const getActivities = async () => {
  const activities = await Activity.findAll();
  if(activities.length === 0) throw Error ("No activities to display")
  return activities;
};

module.exports = getActivities;
