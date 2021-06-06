
const repackingFetchedDreams = (primaryDreamsArray) => {
    const secondaryDreamsArray = [];
    for (const dreamEntry in primaryDreamsArray) {
        const secondaryDreamsArrayEntry = {
            id: dreamEntry,
            ...primaryDreamsArray[dreamEntry]
        };
        secondaryDreamsArray.push(secondaryDreamsArrayEntry);
    };
    return secondaryDreamsArray;
};

export default repackingFetchedDreams;
