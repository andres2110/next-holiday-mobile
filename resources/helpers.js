import { countries } from "./constants"
export const getMonthText=  (monthNumber) => {
    if (monthNumber === 1) return 'February' //TODO resolve bug about the February Month
    let formatter = new Intl.DateTimeFormat('en-us', { month: 'long' })
    let today = new Date()
    today.setMonth(monthNumber)
    let month = formatter.format(today)
    return month;
}

export const getDaysBetween =(a,b) => {
    let oStartDate = new Date(Date.parse(a))
    let oEndDate = new Date(Date.parse(b))
    let iDurationDays = Math.round(
      (oEndDate - oStartDate) /
        (1000 * 60 * 60 * 24)
    );
    return iDurationDays;
}

export const getDateText = (dateString) =>{
    let oDate = new Date(dateString);
    let sMonth = getMonthText(oDate.getMonth());
    return {
        dayString: oDate.getDate(),
        monthText: sMonth
    }
}

export const getCountryText = (value) =>{
    let sCountryText = countries.find((country)=> country.value === value)
    return sCountryText !== null ? sCountryText.label: 'N/A'
}