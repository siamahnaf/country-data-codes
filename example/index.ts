import { getCountryList, getCurrency, GetCurrencyTypes, getCallingCode, getLanguages, getFlagBase64, lookup, CountryDataTypes } from "country-data-codes";

console.log(getCountryList());


const currencyInfo: GetCurrencyTypes = getCurrency("BD"); // Here country code can be isoAlpha2 or isoAlpha3

console.log(currencyInfo)

console.log(getCallingCode("BD")) // Give the country code(isoAlpha2 or isoAlpha3)
//["+88"]

console.log(getLanguages("BD")) // Give the country code(isoAlpha2 or isoAlpha3)
//["ben"]

const flag = getFlagBase64("BD") // Give the country code(isoAlpha2 or isoAlpha3)

//<img src=`data:image/png;base64, ${flag}`/>


const data1: CountryDataTypes = lookup({ name: "Bangladesh" })
const data2: CountryDataTypes = lookup({ countryCode: "BD" })
const data3: CountryDataTypes = lookup({ callingCode: "+880" })
const data4: CountryDataTypes = lookup({ currencyName: "taka" })
const data5: CountryDataTypes = lookup({ currencyCode: "BDT" })
const data6: CountryDataTypes = lookup({ currencySymbol: "৳" })

console.log(data1);