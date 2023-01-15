import _ from "lodash"


export const makeCategory = (slug) => {
    if (typeof slug === 'string') {
        return slug.split('-').join(' ');
    }
    return ' ';
}

export const firstCapital = (categoryName) => {
    return _.startCase(categoryName);
}



