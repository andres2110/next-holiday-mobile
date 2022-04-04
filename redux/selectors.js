import {
  countries,
  DEFAULT_MONTH,
  DEFAULT_COUNTRY,
} from "../resources/constants";
/**********HOLIDAYS INFO **********************************/
export const getHolidaysToDisplay = (store) =>
  store && store.holidaysAll ? store.holidaysAll : [];

export const getInfoToDisplay = (store) =>
  store && store.country && store.currentMonth !== undefined
    ? { country: store.country, month: store.currentMonth }
    : { country: DEFAULT_COUNTRY, month: DEFAULT_MONTH };

/********** FAVORITES INFO **********************************/
export const getNumberOfFavorites = (store) =>
  store && store.favoritesLength ? store.favoritesLength : 0;
export const getFavoritesInfo = (store) => {
  let aFavoritesInfo = store && store.favoritesInfo ? store.favoritesInfo : [];
  let aFavoritesByCountry = [];
  let aFavorites = [];
  let aCountries = [];
  aFavoritesInfo.forEach((element) => {
    if (aCountries.findIndex((country) => country === element.country) < 0) {
      aCountries.push(element.country);
      aFavorites.push(element);
      aFavoritesByCountry.push({
        country: element.country,
        holidays: aFavorites,
      });
      aFavorites = [];
    } else {
      let index = aFavoritesByCountry.findIndex(
        (favorite) => favorite.country === element.country
      );
      aFavoritesByCountry[index].holidays.push(element);
    }
  });

  aFavoritesByCountry = aFavoritesByCountry.map((favorite) => {
    let sCountryText = countries.find(
      (country) => country.value === favorite.country
    ).label;
    return {
      ...favorite,
      country: sCountryText !== null ? sCountryText : favorite.country,
    };
  });
  return aFavoritesByCountry.length > 0 ? aFavoritesByCountry : [];
};
