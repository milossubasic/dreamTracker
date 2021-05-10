
const newDream = {
    headContent: {
        subTitle: 'Hooray, you had a new downfall!'
    },
    formControls: [
        {
            inputType: 'text',
            id: 'title',
            forLabel: 'Title of the dream'
        },
        {
            inputType: 'text',
            id: 'description',
            forLabel: 'Description of the the dream for the list'
        },
        {
            inputType: 'text',
            id: 'content',
            forLabel: 'Enter the story of the dream'
        },
        {   
            inputType: 'select',
            id: 'date',
            numberOfDays: 31,
            names: [
                {
                    id: '',
                    value: ''
                }
            ]
        },
        {
            inputType: 'select',
            id: 'month',
            names: [
                {
                    id: 'mID1',
                    value: 'January'
                },
                {
                    id: 'mID2',
                    value: 'February'
                },
                {
                    id: 'mID3',
                    value: 'March'
                },
                {
                    id: 'mID4',
                    value: 'April'
                },
                {
                    id: 'mID5',
                    value: 'May'
                },
                {
                    id: 'mID6',
                    value: 'Juny'
                },
                {
                    id: 'mID7',
                    value: 'July'
                },
                {
                    id: 'mID8',
                    value: 'August'
                },
                {
                    id: 'mID9',
                    value: 'September'
                },
                {
                    id: 'mID10',
                    value: 'October'
                },
                {
                    id: 'mID11',
                    value: 'November'
                },
                {
                    id: 'mID12',
                    value: 'December'
                }
            ]
        },
        {
            inputType: 'select',
            id: 'day',
            names: [
                {
                    id: 'dID1',
                    value: 'Monday'
                },
                {
                    id: 'dID2',
                    value: 'Tuesday'
                },
                {
                    id: 'dID3',
                    value: 'Wednesday'
                },
                {
                    id: 'dID4',
                    value: 'Thursday'
                },
                {
                    id: 'dID5',
                    value: 'Friday'
                },
                {
                    id: 'dID6',
                    value: 'Saturday'
                },
                {
                    id: 'dID7',
                    value: 'Sunday'
                },
            ]
        }
    ]
};

export default newDream;
