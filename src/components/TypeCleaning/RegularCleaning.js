import React from 'react';
import './RegularCleaning.css';
import { Grid } from '@mui/material';
import BookScheduleButton from '../UI/BookScheduleButton/BookScheduleButton';
import {
    RegularCleaningKitchenIcon,
    RegularCleaningBathroomIcon,
    RegularCleaningLivingIcon,
} from './RegularCleaningGraphics';

/** Four-pointed sparkles — same style as reference (blue diamonds). */
function SparkleIcon({ size = 16, className = '' }) {
    return (
        <svg
            className={`wi-sparkle-svg ${className}`.trim()}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M12 1.5L13.55 10.45L22.5 12L13.55 13.55L12 22.5L10.45 13.55L1.5 12L10.45 10.45L12 1.5Z"
                fill="#3C87C0"
            />
        </svg>
    );
}

const INCLUSION_CARDS = [
    {
        title: 'Kitchen',
        Icon: RegularCleaningKitchenIcon,
        items: [
            'Dusting walls from cobwebs',
            'Wiping and sanitizing all surfaces',
            'Washing countertops and sinks',
            'Cleaning exterior of appliances',
            'Degreasing stove, hood and tiles',
            'Cleaning and polishing floors',
            'Dust removal from doors, sockets, switches',
            'Washing plinths and corners',
            'Removal of animal dander and elimination of odors',
        ],
    },
    {
        title: 'Bathroom',
        Icon: RegularCleaningBathroomIcon,
        items: [
            'Dust removal from doors, sockets, switches',
            'Wiping and sanitizing walls',
            'Cleaning mirrors and glass surfaces',
            'Removing soap scum and plaque',
            'Cleaning and disinfecting toilet',
            'Cleaning shower, bathtub and cabin',
            'Washing sink, bidet and fixtures',
            'Cleaning ventilation grills and lamps',
            'Mold removal (additional service)',
            'Floor cleaning and sanitizing',
        ],
    },
    {
        title: 'Rooms / Corridors / Basements',
        Icon: RegularCleaningLivingIcon,
        items: [
            'Neat assembly and tidying up',
            'Dusting walls and removing cobwebs',
            'Vacuuming floors, carpets and rugs',
            'Washing plinths and floors',
            'Cleaning mirrors and glass surfaces',
            'Wiping doors, handles and switches',
            'Cleaning and polishing furniture',
            'Wiping and sanitizing all surfaces',
            'Removal of animal dander and elimination of odors',
        ],
    },
];

function RegularCleaning() {
    return (
        <section className="svc-section wi-section" aria-labelledby="whats-included-heading">
            <div className="svc-inner wi-section__inner">
                <header className="svc-header wi-header">
                    <p className="svc-label wi-kicker">What&apos;s included</p>
                    <div className="wi-title-row">
                        <h2 id="whats-included-heading" className="svc-heading wi-title">
                            We Clean Every Corner
                        </h2>
                        <div className="wi-title-sparkles" aria-hidden="true">
                            <SparkleIcon size={16} />
                            <SparkleIcon size={22} />
                        </div>
                    </div>
                    <p className="svc-subtitle wi-subtitle">
                        Kitchen, bath and living spaces—one consistent checklist per visit.
                    </p>
                </header>

                <Grid container spacing={2} className="wi-cards" justifyContent="center">
                    {INCLUSION_CARDS.map(({ title, Icon, items }) => (
                        <Grid item xs={12} md={4} key={title}>
                            <article className="svc-card wi-card">
                                <div className="wi-card__icon svc-icon-circle">
                                    <Icon />
                                </div>
                                <h3 className="wi-card__title">{title}</h3>
                                <div className="wi-card__divider" aria-hidden="true" />
                                <ul className="wi-card__list">
                                    {items.map((text) => (
                                        <li key={text}>
                                            <span className="wi-check" aria-hidden="true">
                                                ✓
                                            </span>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </Grid>
                    ))}
                </Grid>

                <div className="svc-cta wi-cta">
                    <BookScheduleButton />
                </div>
            </div>
        </section>
    );
}

export default RegularCleaning;
