import {
  START_HOLIDAYS_REQUEST_FROM_API,
  END_HOLIDAYS_REQUEST_FROM_API,
  CHANGE_COUNTRY_OF_HOLIDAYS,
  CHANGE_FAVORITE_HOLIDAY,
  CHANGE_MONTH_OF_HOLIDAY,
} from "../actionTypes";
import {
  API_KEY,
  API_URL,
  DEFAULT_COUNTRY,
  DEFAULT_MONTH,
} from "../../resources/constants";
import axios from "axios";

const startHolidaysRequest = () => ({
  type: START_HOLIDAYS_REQUEST_FROM_API,
});

const endHolidaysRequest = (recivedResponse) => ({
  type: END_HOLIDAYS_REQUEST_FROM_API,
  holidays:
    recivedResponse && recivedResponse.length > 0 ? recivedResponse : [],
});

const transformData = (data) => {
  return data.holidays.map((holiday) => {
    let oStartDate = new Date(Date.parse(holiday.start))
    let oEndDate = new Date(Date.parse(holiday.end))
    let iDurationDays = Math.round(
      (oEndDate - oStartDate) /
        (1000 * 60 * 60 * 24)
    );
    return {
      id: holiday.id,
      name: holiday.name,
      date: holiday.date,
      isFavorite: false,
      country: holiday.country,
      end: holiday.end,
      duration:iDurationDays,
      type:holiday.type
    };
  });
};

export function getHolidaysFromAPI(
  country = DEFAULT_COUNTRY,
  month = DEFAULT_MONTH
) {
  let today = new Date();
  return (dispatch) => {
    dispatch(startHolidaysRequest());
    return axios
      .get(API_URL, {
        params: {
          api_key: API_KEY,
          country: country,
          year: today.getFullYear(),
          month: month + 1,
          after: 1,
        },
      })
      .then((response) => {
        dispatch(endHolidaysRequest(transformData(response.data)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const chageCountryOfHolidays = (country) => ({
  type: CHANGE_COUNTRY_OF_HOLIDAYS,
  country: country ? country : DEFAULT_COUNTRY,
});

export const chageFavorite = (id) => ({
  type: CHANGE_FAVORITE_HOLIDAY,
  idHoliday: id ? id : "",
});

export const changeMonthOfHolidays = (month) => ({
  type: CHANGE_MONTH_OF_HOLIDAY,
  month: month ? month : 0,
});
