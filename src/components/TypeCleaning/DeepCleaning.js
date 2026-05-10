import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BookScheduleButton from '../UI/BookScheduleButton/BookScheduleButton';
import sofa from '../imgs/sofa.jpeg';
import bath from '../imgs/bath.jpeg';
import './DeepCleaning.css';

const DETAILS = [
    {
        title: 'Vacuuming & Wet Cleaning',
        text: 'All floors and surfaces are vacuumed and wet cleaned, including carpets, wood, tile and laminate floors.',
    },
    {
        title: 'Furniture Cleaning',
        text: 'Thorough dusting, stain removal and leather-safe care for every piece.',
    },
    {
        title: 'Kitchen Deep Cleaning',
        text: 'Stove, oven, microwave, hood, refrigerator and cabinets—inside and out.',
    },
    {
        title: 'Bathroom Sanitizing',
        text: 'Toilets, tubs, showers, sinks, mirrors and tiles—scale and grime removed.',
    },
    {
        title: 'Windows & Glass',
        text: 'Interior and exterior glass for a clear, streak-free finish.',
    },
    {
        title: 'Dust Removal',
        text: 'Sills, radiators and hard-to-reach spots cleared of dust and buildup.',
    },
    {
        title: 'Disinfection',
        text: 'High-touch surfaces treated with professional-grade disinfectants.',
    },
    {
        title: 'Treatment of Main Areas',
        text: 'Floors, ceilings, walls and doors refreshed for a complete reset.',
    },
];

function DeepCleaning() {
    return (
        <section className="svc-section dc-section" aria-labelledby="deep-cleaning-heading">
            <div className="dc-section__glow" aria-hidden="true" />
            <div className="svc-inner dc-inner">
                <header className="svc-header dc-header">
                    <p className="svc-label dc-kicker">Deep cleaning details</p>
                    <h2 id="deep-cleaning-heading" className="svc-heading dc-title">
                        Thorough Cleaning. Healthier Spaces.
                    </h2>
                    <p className="svc-subtitle dc-subtitle">
                        Room-by-room precision—lighter, safer, genuinely fresh.
                    </p>
                </header>

                <div className="dc-main-shell">
                    <div className="dc-panel dc-panel--content">
                        <ul className="dc-features">
                            {DETAILS.map(({ title, text }) => (
                                <li key={title} className="dc-feature">
                                    <span className="dc-feature__icon-wrap" aria-hidden="true">
                                        <CheckCircleIcon className="dc-feature__icon" />
                                    </span>
                                    <div className="dc-feature__body">
                                        <h3 className="dc-feature__title">{title}</h3>
                                        <p className="dc-feature__desc">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <figure className="dc-panel dc-panel--media">
                        <div className="dc-media">
                            <img
                                src={sofa}
                                alt="Bright living space with fresh upholstery after deep cleaning"
                                className="dc-media__img"
                                width={480}
                                height={280}
                                loading="lazy"
                            />
                            <img
                                src={bath}
                                alt="Sanitized bathroom surfaces and fixtures"
                                className="dc-media__img"
                                width={480}
                                height={280}
                                loading="lazy"
                            />
                        </div>
                    </figure>
                </div>

                <div className="svc-cta dc-cta">
                    <BookScheduleButton />
                </div>
            </div>
        </section>
    );
}

export default DeepCleaning;
