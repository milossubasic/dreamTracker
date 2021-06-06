// I guess JavaScript is doing type coercion here, but is it smart to leave it like this?

const repackingFetchedDreamsDate = (originalDate) => {
    const newDateConstant = new Date(originalDate);
    const year = newDateConstant.getFullYear();
    const month = (newDateConstant.getMonth())+1;
    const dateAsNumber = newDateConstant.getDate();
    const days = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateAsDay = days[newDateConstant.getDay()];
    return {
        year: year,
        month: month,
        date: dateAsNumber,
        day: dateAsDay
    };
};

export default repackingFetchedDreamsDate;
