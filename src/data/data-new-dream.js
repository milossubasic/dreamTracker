
const newDream = {
    headContent: {
        subTitle: 'Hooray, you had a new dream! You can use the form below to save it.'
    },
    formControls: [
        {
            inputType: 'date',
            id: 'date',
            labelText: 'Date',
            hintText: 'When the dream happened'
        },
        {
            inputType: 'text',
            id: 'title',
            labelText: 'Title',
            placeholderText: 'Night out',
            hintText: 'Will be displayed in detailed view of a dream'
        },
        {
            inputType: 'textArea',
            id: 'summary',
            labelText: 'Summary',
            placeholderText: 'I went out with Ana and had wonderful time, untill Dracula showed up. ',
            hintText: 'Will be displayed in list view of your dreams'
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
