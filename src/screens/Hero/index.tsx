import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ListItem } from '../../components/ListItem';
import { tourData } from './data';
import bgImage from '../../assets/main-bg.jpg';
import bgImageMobile from '../../assets/main-bg-mobile.jpg';

import './index.scss';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__main-bg">
                <picture>
                    <source srcSet={bgImageMobile} media="(max-width: 600px)" />
                    <img src={bgImage} alt="Julia Gavrilina" />
                </picture>
            </div>
            <div className="hero__list">
                {tourData.map((item, i) => (
                    <ListItem item={item} key={i} index={i} />
                ))}
            </div>
        </section>
    );
};
