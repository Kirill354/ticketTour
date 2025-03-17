import { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { TicketItem } from '../../screens/Hero/data';

import vkImage from '../../assets/vk_white.png';

import './index.scss';

interface ListItemProps {
    item: TicketItem;
    index: number;
}

export const ListItem: FC<ListItemProps> = ({ item, index }) => {
    const { id, date, time, city, place, vkLink, ticketsLink } = item;

    useGSAP(() => {
        gsap.to(`#item-hero-${id}`, {
            scrollTrigger: {
                trigger: `#item-hero-${id}`,
                start: '-150% bottom',
            },
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.05,
            ease: 'power2.inOut',
        });
    }, []);

    return (
        <div id={`item-hero-${id}`} className="hero__item item-hero">
            <div className="item-hero__wrapper">
                <div className="item-hero__top">
                    <div className="item-hero__date">
                        <span>
                            {date} {time}
                        </span>
                    </div>
                    <div className="item-hero__info">
                        <div className="item-hero__city">
                            <span>{city}</span>
                        </div>
                        <div className="item-hero__place">
                            <span>{place}</span>
                        </div>
                    </div>
                </div>
                <div className="item-hero__bottom">
                    <div className="item-hero__logo">
                        <a href={vkLink} target="_blank">
                            <img src={vkImage} alt="vk logo" />
                        </a>
                    </div>
                    <div className="item-hero__button-wrapper jost-medium">
                        <a href={ticketsLink} target="_blank" rel="noopener noreferrer">
                            билеты
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
