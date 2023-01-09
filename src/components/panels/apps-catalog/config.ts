// import { faCalendar, faPerson, faHourglass, faCropSimple, faStopwatch20, faFileWord } from '@fortawesome/free-solid-svg-icons';

import { CalendarMonthRounded, EmojiPeople, Spellcheck } from '@mui/icons-material';

const apps = [
    {
        groupId: 'dateAndTime',
        groupLabel: 'Date and Time',
        items: [
            {
                id: 'calendar',
                label: 'Calendar',
                Icon: CalendarMonthRounded,
            },
        ],
    },
    {
        groupId: 'aboutMe',
        groupLabel: 'About Me',
        items: [
            {
                id: 'age',
                label: 'Age Calculator',
                Icon: EmojiPeople,
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
                Icon: Spellcheck,
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
