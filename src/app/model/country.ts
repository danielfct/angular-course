export class Country {
    constructor(public name: CountryName) {
    }
}

interface CountryName {
    common: string;
    official: string;
}