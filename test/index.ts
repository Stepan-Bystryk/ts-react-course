interface Country {
    country: string;
    abbreviation: string;
    city: string;
    currency_name: string;
    population: number
}

const countries: Country[] = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959
    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050
    }
]

// task 1
function getCountriesString(countries: Country[]): string {
    return countries.map((countryItem) => countryItem.country).join(', ')
}

const str = getCountriesString(countries)
console.log(str);

// task 2
function amountPopulation(countries: Country[]): number {
    let count = 0;
    countries.forEach((count, i) => count + i.population, 0)
    return count;
}

// task 3
function countriesSortByName(countries: Country[]): string[] {
    return countries.sort((a, b) => b.country < a.country ? 1 : -1).map(({ country }) => country);
}

// task 5
function getArrayOfCities(countries: Country[]): string[] {
    return countries.map((country) => country.city).sort((city1, city2) => {
        if (city2[0].toLocaleLowerCase() > city1[0]) {
            return -1
        } else {
            return 1
        }
    })
}
console.log(getArrayOfCities(countries))

//task 6
function getAveragePopulation(countries: [Country]): number {
    return countries.reduce<number>((total, country) => total + countriesSortByName.population,0)/countries.length
}