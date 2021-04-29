
const repackingSelectDate = objects => {
    let arrayHelper = [];

    for (let i=1; i <= objects; i++) {
        arrayHelper.push({id: `domID${i}`, value: `${i}`});    
    };

    return arrayHelper;
};

export default repackingSelectDate;
