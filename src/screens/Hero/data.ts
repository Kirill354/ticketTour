export interface TicketItem {
    id: string;
    date: string;
    time: string;
    city: string;
    place: string;
}

export const tourData: TicketItem[] = [
    {
        id: '1',
        date: '20 мая',
        time: '19.00',
        city: 'Чита',
        place: 'Филармония',
    },
    {
        id: '2',
        date: '21 мая',
        time: '19.00',
        city: 'Улан-Удэ',
        place: 'Z club',
    },
    {
        id: '3',
        date: '22 мая',
        time: '19.00',
        city: 'Иркутск',
        place: 'ДК Орбита',
    },
    {
        id: '4',
        date: '24 мая',
        time: '19.00',
        city: 'Благовещенск',
        place: 'ТРЦ Острова, GRAND ARENA',
    },
    {
        id: '5',
        date: '25 мая',
        time: '15.00',
        city: 'Хабаровск',
        place: 'клуб Loona',
    },
    {
        id: '6',
        date: '26 мая',
        time: '19.00',
        city: 'Комсомольск на Амуре',
        place: 'ДК Авиастроителей',
    },
    {
        id: '7',
        date: '27 мая',
        time: '19.00',
        city: 'Южно-Сахалинск',
        place: 'ТЦ Столица, Конгресс Холл',
    },
    {
        id: '8',
        date: '29 мая',
        time: '19.00',
        city: 'Уссурийск',
        place: 'ДОРА',
    },
    {
        id: '9',
        date: '30 мая',
        time: '19.00',
        city: 'Находка',
        place: 'Центр культуры',
    },
    {
        id: '10',
        date: '31 мая',
        time: '19.00',
        city: 'Владивосток',
        place: 'ДК Профсоюзов, Арена Холл',
    },
    {
        id: '11',
        date: '01 июня',
        time: '19.00',
        city: 'Якутск',
        place: 'Якутск Сити Холл',
    },
];
