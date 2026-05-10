import React from 'react';
import './MoveInCleaning.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BookScheduleButton from '../UI/BookScheduleButton/BookScheduleButton';
import {
    MoveInScraperIcon,
    MoveInSprayIcon,
    MoveInShieldDiamondIcon,
} from './MoveInFeatureIcons';

const MOVE_IN_FEATURES = [
    {
        id: 'movein-deep',
        Icon: MoveInScraperIcon,
        text: 'Deep cleaning of all surfaces and fixtures.',
    },
    {
        id: 'movein-sanitize',
        Icon: MoveInSprayIcon,
        text: 'Sanitizing appliances, floors and high-touch areas.',
    },
    {
        id: 'movein-residue',
        Icon: MoveInShieldDiamondIcon,
        text: 'Removes dust, dirt and residues from previous occupants.',
    },
];

const MOVE_OUT_FEATURES = [
    {
        id: 'moveout-rooms',
        Icon: WindowOutlinedIcon,
        text: 'Thorough cleaning of kitchen, bathrooms and living areas.',
    },
    {
        id: 'moveout-dirt',
        Icon: PersonOutlineIcon,
        text: 'Removes built-up dirt and signs of occupancy.',
    },
    {
        id: 'moveout-handover',
        Icon: GppGoodOutlinedIcon,
        text: 'Leaves the space in excellent condition for the next occupants.',
    },
];

function FeatureList({ items, tone }) {
    return (
        <ul className={`mim-feature-list mim-feature-list--${tone}`}>
            {items.map(({ Icon, text, id }) => (
                <li className="mim-feature" key={id}>
                    <span
                        className={`mim-feature__icon-wrap mim-feature__icon-wrap--${tone}`}
                        aria-hidden="true"
                    >
                        <Icon className="mim-feature__svg" />
                    </span>
                    <p className="mim-feature__text">{text}</p>
                </li>
            ))}
        </ul>
    );
}

function MoveInCleaning() {
    return (
        <section className="svc-section mim-section" aria-labelledby="move-in-out-heading">
            <div className="mim-section__glow" aria-hidden="true" />
            <div className="svc-inner mim-inner">
                <header className="svc-header mim-header">
                    <p className="svc-label mim-kicker">Move transitions</p>
                    <h2 id="move-in-out-heading" className="svc-heading mim-title">
                        Move-In &amp; Move-Out Cleaning
                    </h2>
                    <p className="svc-subtitle mim-lede">
                        Two focused deep cleans—whether you are arriving or handing over the keys.
                    </p>
                </header>

                <div className="mim-cards-grid">
                    <article className="mim-card mim-card--movein">
                        <div className="mim-card__top">
                            <div
                                className="mim-card__brand mim-card__brand--blue"
                                aria-hidden="true"
                            >
                                <HomeIcon className="mim-card__brand-icon mim-card__brand-icon--main" />
                                <SearchIcon className="mim-card__brand-icon mim-card__brand-icon--badge" />
                            </div>
                            <div className="mim-card__intro">
                                <h3 className="mim-card__heading">Move-In Cleaning</h3>
                                <p className="mim-card__desc">
                                    A full-property deep clean so you start fresh—healthy surfaces,
                                    appliances and peace of mind.
                                </p>
                            </div>
                        </div>
                        <FeatureList items={MOVE_IN_FEATURES} tone="blue" />
                    </article>

                    <article className="mim-card mim-card--moveout">
                        <div className="mim-card__top">
                            <div
                                className="mim-card__brand mim-card__brand--green"
                                aria-hidden="true"
                            >
                                <Inventory2OutlinedIcon className="mim-card__brand-icon mim-card__brand-icon--main" />
                                <AutoAwesomeIcon className="mim-card__brand-sparkle mim-card__brand-sparkle--tl" />
                                <AutoAwesomeIcon className="mim-card__brand-sparkle mim-card__brand-sparkle--br" />
                            </div>
                            <div className="mim-card__intro">
                                <h3 className="mim-card__heading">Move-Out Cleaning</h3>
                                <p className="mim-card__desc">
                                    Detailed cleaning to restore the space—ready for inspection or the
                                    next resident.
                                </p>
                            </div>
                        </div>
                        <FeatureList items={MOVE_OUT_FEATURES} tone="green" />
                    </article>
                </div>

                <div className="mim-meta" role="list">
                    <div className="mim-meta-chip mim-meta-chip--blue" role="listitem">
                        <span className="mim-meta-chip__icon" aria-hidden="true">
                            <GppGoodOutlinedIcon />
                        </span>
                        <p className="mim-meta-chip__text">
                            Detailed, time-intensive work—built to leave every space in optimal
                            condition.
                        </p>
                    </div>
                    <div className="mim-meta-chip mim-meta-chip--green" role="listitem">
                        <span className="mim-meta-chip__icon" aria-hidden="true">
                            <MapsHomeWorkOutlinedIcon />
                        </span>
                        <p className="mim-meta-chip__text">
                            Homes, apartments, condos, offices and retail—flexible to your property.
                        </p>
                    </div>
                </div>

                <div className="svc-cta mim-cta">
                    <BookScheduleButton />
                </div>
            </div>
        </section>
    );
}

export default MoveInCleaning;
