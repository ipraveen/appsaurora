import { faCalendar, faPerson, faHourglass, faCropSimple, faStopwatch20 } from '@fortawesome/free-solid-svg-icons';

const apps = [
    {
        groupId: 'calender',
        groupLabel: 'Calender',
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
        groupLabel: 'Date & Time',
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
        const isDevOverride = localStorage.getItem('APPSAURORA_devOverride') === 'true';
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
