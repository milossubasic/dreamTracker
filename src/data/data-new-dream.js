
const newDream = {
    headContent: {
        subTitle: 'Hooray, you had a new dream! You can use the form below to save it.'
    },
    formControls: [
        {
            inputType: 'date',
            id: 'date',
            labelText: 'Date',
        },
        {
            inputType: 'text',
            id: 'title',
            labelText: 'Title',
            placeholderText: 'Night out',
            hintText: 'This title will be displayed in detailed view of the dream'
        },
        {
            inputType: 'textArea',
            id: 'summary',
            labelText: 'Summary',
            placeholderText: 'I went out with Ana and had wonderful time, untill Dracula showed up. ',
            hintText: 'This summery will be displayed in list view of your dreams'
        },
        {
            inputType: 'textArea',
            id: 'story',
            labelText: 'Dream',
            placeholderText:'First thing I can remember is that I am looking in mirror and trying to apply red lipstick...'
        }
    ]
};

export default newDream;
