export interface TicketItem {
    id: string;
    date: string;
    time: string;
    city: string;
    place: string;
    ticketsLink: string;
    vkLink: string;
}

export const tourData: TicketItem[] = [
    {
        id: '1',
        date: '20 мая',
        time: '19.00',
        city: 'Чита',
        place: 'Филармония',
        ticketsLink: 'https://xn--90abgdchckhws9d0f.xn--p1ai/events/gavrilina/',
        vkLink: 'https://vk.com/gavrilina_chita',
    },
    {
        id: '2',
        date: '21 мая',
        time: '19.00',
        city: 'Улан-Удэ',
        place: 'Z club',
        ticketsLink: 'https://iframeab-pre2375.intickets.ru/seance/55711279/?locale=ru_RU#abiframe',
        vkLink: 'https://vk.com/gavrilina_ulan_ude_tur',
    },
    {
        id: '3',
        date: '22 мая',
        time: '19.00',
        city: 'Иркутск',
        place: 'ДК Орбита',
        ticketsLink: 'https://irk.kassy.ru/events/koncerty-i-shou/2-11149/',
        vkLink: 'https://vk.com/gavrilina_irkutsk',
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
        ticketsLink: 'https://www.dvhab.ru/afisha/khabarovsk/event/224850',
        vkLink: 'https://vk.com/club229723053',
    },
    {
        id: '6',
        date: '26 мая',
        time: '19.00',
        city: 'Комсомольск на Амуре',
        place: 'ДК Авиастроителей',
        ticketsLink:
            'https://www.dvhab.ru/afisha/komsomolsk/event/224954#look=/afisha/purchase/events/224954/1096398/scheme',
        vkLink: 'https://vk.com/club229723053',
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
        ticketsLink: 'https://www.vl.ru/afisha/ussuriisk/event/225154',
        vkLink: 'https://vk.com/club229723053',
    },
    {
        id: '9',
        date: '30 мая',
        time: '19.00',
        city: 'Находка',
        place: 'Центр культуры',
        ticketsLink: 'https://www.vl.ru/afisha/nakhodka/event/225156',
        vkLink: 'https://vk.com/club229723053',
    },
    {
        id: '10',
        date: '31 мая',
        time: '19.00',
        city: 'Владивосток',
        place: 'ДК Профсоюзов, Арена Холл',
        ticketsLink: 'https://www.vl.ru/afisha/vladivostok/event/225147',
        vkLink: 'https://vk.com/club229723053',
    },
    {
        id: '11',
        date: '01 июня',
        time: '19.00',
        city: 'Якутск',
        place: 'Якутск Сити Холл',
        ticketsLink:
            'https://appmost.ru/city-yakutsk/afisha/activity/26587?date=2025-06-01&city_id=125&slug=koncerty',
        vkLink: 'https://vk.com/gavrilina_ykt',
    },
];
