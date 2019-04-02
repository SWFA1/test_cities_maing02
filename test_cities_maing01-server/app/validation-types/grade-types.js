/* eslint-disable */

const addGradeDtoInType = shape({
  cityId: mongoId().isRequired(),
  grade: oneOf(["A","B","C","D","E"]).isRequired()
});

const refreshAverageGradeDtoInType = shape({
  cityId: mongoId().isRequired()
});
