/* eslint-disable */

const createCityDtoInType = shape({
  name: string().isRequired(),
  population: number().isRequired(),
  country: string().isRequired()
});

const listCitiesDtoInType = shape({
  filterMap:shape({
    name: string(),
    population: number(),
    country: string(),
  }),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});
