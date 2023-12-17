import { CalendarMonthRounded, EmojiPeople, Wysiwyg, AvTimer } from '@mui/icons-material';

const apps = [
    {
        groupId: 'dateAndTime',
        groupLabel: 'Date',
        items: [
            {
                id: 'calendar',
                label: 'Calendar',
                Icon: CalendarMonthRounded,
                color: '#3B78C6',
            },
            {
                id: 'age',
                label: 'Age Calculator',
                Icon: EmojiPeople,
                color: '#788d6b',
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
                Icon: AvTimer,
                color: '#701a75',
            },
        ],
    },
    {
        groupId: 'english',
        groupLabel: 'Words & Grammar',
        items: [
            {
                id: 'wordCards',
                label: 'Word Cards',
                Icon: Wysiwyg,
                color: '#b27001',
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
