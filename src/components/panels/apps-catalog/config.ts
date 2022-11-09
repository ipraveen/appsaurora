import { faCalendar, faPerson, faHourglass } from '@fortawesome/free-solid-svg-icons';

export const apps = [
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
                label: 'my age',
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
                label: 'timer',
                icon: faHourglass,
            },
        ],
    },
];
