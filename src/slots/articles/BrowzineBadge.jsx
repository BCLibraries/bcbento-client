import React from 'react';

/**
 * Links to FullText in Browzine
 *
 * @param {object} libkeyAvailability
 * @param {string} libkeyAvailability.fullTextFile
 * @param {string} libkeyAvailability.browzineWebLink
 * @constructor
 */
function BrowzineBadge({libkeyAvailability}) {
    return (
        <div className="browzine-badge">
            {libkeyAvailability.fullTextFile &&
            <a href={libkeyAvailability.fullTextFile} className="browzine-badge__download-now" target="_blank" rel="noopener noreferrer">
                <img src="https://assets.thirdiron.com/images/integrations/browzine-pdf-download-icon.svg" className="browzine-pdf-icon" aria-hidden="true" width="12" height="16" alt=""/>
                <span className="browzine-web-link-text">Download Now
                    <span className="browzine-badge__pdf_notice"> (PDF)</span>
                </span>
            </a>
            }

            {libkeyAvailability.browzineWebLink &&
            <a className="browzine-badge__view-issue" href={libkeyAvailability.browzineWebLink}  target="_blank" rel="noopener noreferrer">
                <img src="https://assets.thirdiron.com/images/integrations/browzine-open-book-icon.svg" className="browzine-book-icon" aria-hidden="true" width="15" height="15" alt=""/>
                <span className="browzine-web-link-text">View Issue Contents</span>
            </a>
            }
        </div>
    );
}

export default BrowzineBadge;
