export const  currency = (value) => {
    if (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return 0;
}