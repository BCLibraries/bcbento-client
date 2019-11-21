import React from 'react';
import SkipToLink from "./SkipToLink";

function SkipToLinkBar({booksDiv, articlesDiv, faqDiv, librariansDiv, videoDiv, websiteDiv}) {
    return (
        <div className="row">
            <nav className="link-to-results col-md-8">
                <div className="link-to-results__skip-to">Skip to:</div>
                <SkipToLink target={booksDiv} label="Books & more"/>
                <SkipToLink target={articlesDiv} label="Articles"/>
                <SkipToLink target={faqDiv} label="FAQ"/>
                <SkipToLink target={librariansDiv} label="Librarians"/>
                <SkipToLink target={videoDiv} label="Video"/>
                <SkipToLink target={websiteDiv} label="Website"/>
            </nav>
            <div className="tell-us col-md-4"><a href="https://forms.gle/cfqoEnM6s13KLWJu9">Tell us what you think!</a></div>
        </div>
    );
}

export {SkipToLinkBar};
