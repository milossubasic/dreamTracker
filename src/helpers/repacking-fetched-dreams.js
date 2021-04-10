
const repackingFetchedDreams = (dreamsObject) => {
    const dreamsArray = [];
    for (const dreamEntry in dreamsObject) {
        const newDreamsArrayEntry = {
            id: dreamEntry,
            ...dreamsObject[dreamEntry]
        };
        dreamsArray.push(newDreamsArrayEntry);
    };
    return dreamsArray;
};

export default repackingFetchedDreams;
