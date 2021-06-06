import repackingFetchedDreamsDate from './repacking-fetched-dreams-date';

const repackingFetchedDreams = (primaryDreamsArray) => {
    const secondaryDreamsArray = [];
    for (const dreamEntry in primaryDreamsArray) {
        const newDateObject = repackingFetchedDreamsDate(primaryDreamsArray[dreamEntry].date);
        primaryDreamsArray[dreamEntry].date = newDateObject;
        const secondaryDreamsArrayEntry = {
            id: dreamEntry,
            ...primaryDreamsArray[dreamEntry]
        };
        secondaryDreamsArray.push(secondaryDreamsArrayEntry);
    };
    return secondaryDreamsArray;
};

export default repackingFetchedDreams;
