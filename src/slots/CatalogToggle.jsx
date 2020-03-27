import React, {useState} from 'react';

function CatalogToggle({isChecked, handleToggle}) {

    const [isDisplayed, setIsDisplayed] = useState(false);

    function toggleDisplay() {
        setIsDisplayed(!isDisplayed);
    }

    const explanationClass = isDisplayed ? 'catalog-toggle__explanation-displayed' : 'catalog-toggle__explanation-hidden';

    return (
        <div className="catalog-toggle">
            <div className="catalog-toggle__input-group">
                <label className="catalog-toggle__label">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleToggle}
                    /> Limit to online content
                </label>
                <span className="catalog-toggle__help-link" onClick={toggleDisplay}>what's this?</span>
            </div>
            <div className={explanationClass}>
                When this box is checked, search is limited to items available online. Uncheck the box to include our physical collections.
            </div>
        </div>
    );
}

export default CatalogToggle;