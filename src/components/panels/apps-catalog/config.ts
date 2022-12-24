import { faCalendar, faPerson, faHourglass, faCropSimple, faStopwatch20, faFileWord } from '@fortawesome/free-solid-svg-icons';

const apps = [
    {
        groupId: 'calender',
        groupLabel: 'Calender & Days',
        items: [
            {
                id: 'calender',
                label: 'Calender',
                icon: faCalendar,
            },
            {
                id: 'age',
                label: 'Age',
                icon: faPerson,
            },
        ],
    },
    {
        groupId: 'dateTime',
        groupLabel: 'Time',
        items: [
            {
                id: 'timer',
                label: 'Timer',
                icon: faHourglass,
            },
            {
                id: 'countdown',
                label: 'Countdown',
                icon: faStopwatch20,
                inDev: true,
            },
        ],
    },
    {
        groupId: 'english',
        groupLabel: 'Words & Grammar',
        items: [
            {
                id: 'wordCards',
                label: 'word cards',
                icon: faFileWord,
            },
        ],
    },
    // {
    //     groupId: 'photoimage',
    //     groupLabel: 'Image & Photo',
    //     items: [
    //         {
    //             id: 'imageCropper',
    //             label: 'Cropper',
    //             icon: faCropSimple,
    //             inDev: true,
    //         },
    //     ],
    // },
];

export const getApps = () => {
    return apps.map((app) => {
        const isDevOverride =
            typeof window !== 'undefined' && window.localStorage.getItem('APPSAURORA_devOverride') === 'true';
        if (isDevOverride) {
            return app;
        }

        const items = app.items.filter((item) => item.inDev !== true);
        return {
            ...app,
            items,
        };
    });
};
