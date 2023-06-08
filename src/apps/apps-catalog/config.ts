import { CalendarMonthRounded, EmojiPeople, Wysiwyg } from '@mui/icons-material';

const apps = [
    {
        groupId: 'dateAndTime',
        groupLabel: 'Date and Time',
        items: [
            {
                id: 'calendar',
                label: 'Calendar',
                Icon: CalendarMonthRounded,
                color: '#3B78C6'
            },
            {
                id: 'age',
                label: 'My Age',
                Icon: EmojiPeople,
                color: '#788d6b'
            },
        ],
    },
   
    // {
    //     groupId: 'dateTime',
    //     groupLabel: 'Time',
    //     items: [
    //         {
    //             id: 'timer',
    //             label: 'Timer',
    //             icon: faHourglass,
    //         },
    //         {
    //             id: 'countdown',
    //             label: 'Countdown',
    //             icon: faStopwatch20,
    //             inDev: true,
    //         },
    //     ],
    // },
    {
        groupId: 'english',
        groupLabel: 'Words & Grammar',
        items: [
            {
                id: 'wordCards',
                label: 'Word Cards',
                Icon: Wysiwyg,
                color: '#b27001'
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

export const getApp = (appId: string) => {
    let app;
    apps.forEach((appItem) => {
        appItem.items.forEach((item) => {
            if (item.id === appId) {
                app = item;
            }
        });
    });

    return app;
};
