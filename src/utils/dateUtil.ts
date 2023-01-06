export const getCurrentYear = () => new Date().getFullYear();

type DateType = string | number | Date;
export const compare = (d1: DateType, d2: DateType) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if (date1 > date2) {
        return 1;
    } else if (date1 < date2) {
        return -1;
    } else {
        return 0;
    }
};
