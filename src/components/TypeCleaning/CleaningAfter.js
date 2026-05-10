import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import BookScheduleButton from '../UI/BookScheduleButton/BookScheduleButton';
import afterRepairHero from '../imgs/After_Repair_big.jpeg';
import './CleaningAfter.css';

const FEATURES = [
    'Varnish removal',
    'Removal of dirt from the tile',
    'Dedusting of all surfaces',
    'Wet floor cleaning (6–8 repetitions)',
    'Washing door blocks',
    'Removing dust from sockets and switches',
    'Cleaning mirror surfaces',
];

function CleaningAfter() {
    return (
        <section
            className="svc-section ar-section"
            aria-labelledby="after-repair-heading"
        >
            <div className="ar-section__glow" aria-hidden="true" />
            <div className="svc-inner ar-inner">
                <header className="svc-header ar-head">
                    <p className="svc-label">Post-renovation</p>
                    <h2 id="after-repair-heading" className="svc-heading">
                        We Remove What Others Can&apos;t
                    </h2>
                    <p className="svc-subtitle ar-subtitle">
                        After-repair deep cleaning—construction dust, coatings and buildup cleared so
                        your space is truly move-in ready.
                    </p>
                </header>

                <div className="ar-composite">
                    <div className="ar-main-grid">
                        <div className="ar-features-panel">
                            <ul className="ar-feature-grid">
                                {FEATURES.map((text) => (
                                    <li key={text} className="ar-feature">
                                        <span className="ar-feature__icon-wrap" aria-hidden="true">
                                            <CheckCircleIcon className="ar-feature__icon" />
                                        </span>
                                        <span className="ar-feature__text">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <figure className="ar-media">
                            <div className="ar-media__frame">
                                <img
                                    src={afterRepairHero}
                                    alt="Professional wet mopping of hardwood floors during post-renovation cleaning"
                                    className="ar-media__img"
                                    width={3000}
                                    height={2250}
                                    loading="lazy"
                                />
                            </div>
                        </figure>
                    </div>

                    <div className="ar-info-strip" role="note">
                        <span className="ar-info-strip__icon" aria-hidden="true">
                            <ConstructionOutlinedIcon />
                        </span>
                        <p className="ar-info-strip__text">
                            Heavy residue—paint film, silica dust and trade debris—with the same
                            detail-focused finish as our premium visits.
                        </p>
                    </div>
                </div>

                <div className="svc-cta ar-cta">
                    <BookScheduleButton />
                </div>
            </div>
        </section>
    );
}

export default CleaningAfter;
