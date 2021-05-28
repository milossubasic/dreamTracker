
// so in the meantime this helper completly lost it's use,
// but I'm going to keep it here for a while

const repackingSelectDate = objects => {
    let arrayHelper = [];

    for (let i=1; i <= objects; i++) {
        arrayHelper.push({id: `domID${i}`, value: `${i}`});    
    };

    return arrayHelper;
};

export default repackingSelectDate;
