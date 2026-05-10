import React from 'react';

const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.35,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};

/** Angled handheld scraper / brush — matches reference */
export function MoveInScraperIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
            <path
                d="M4.5 19.5L14.5 9.5L16.2 11.2L6.2 21.2L4.5 19.5Z"
                {...stroke}
            />
            <path d="M14.5 9.5L17.5 6.5L19.2 8.2L16.2 11.2" {...stroke} />
            <path d="M3.8 18.8L5.5 17.1" {...stroke} />
        </svg>
    );
}

/** Spray bottle with bubbles / sparkles at nozzle */
export function MoveInSprayIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
            <path
                d="M10 4h4v2.2h-.9L12 8.5v9.2a2.6 2.6 0 01-2.6 2.6H9.1a2.6 2.6 0 01-2.6-2.6V8.5L5.9 6.2V4H10Z"
                {...stroke}
            />
            <path d="M12 4V2.8h2.2V4" {...stroke} />
            <circle cx="16.2" cy="3.8" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="17.8" cy="6" r="0.65" fill="currentColor" stroke="none" />
            <circle cx="15.4" cy="6.6" r="0.5" fill="currentColor" stroke="none" />
        </svg>
    );
}

/** Shield with diamond inside — cleanliness / protection */
export function MoveInShieldDiamondIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
            <path
                d="M12 3.2L19.2 6.2V11.8C19.2 16.2 12 20.8 12 20.8S4.8 16.2 4.8 11.8V6.2L12 3.2Z"
                {...stroke}
            />
            <path
                d="M12 9.2l2.1 3.1L12 15.4l-2.1-3.1L12 9.2Z"
                fill="currentColor"
                stroke="none"
                opacity="0.9"
            />
        </svg>
    );
}
