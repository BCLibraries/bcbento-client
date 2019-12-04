import React from "react";
import {Logger} from "../../Logger";

/**
 * Display a Best Bet we created (e.g. a database or LibAnswers response)
 *
 * @param {LocalBestBet} bestBet
 * @return {*}
 * @constructor
 */
function LocalBestBetResult({bestBet}) {
    Logger.info(`Local Best Bet Result displayed: ${bestBet.title}`);

    function logClick() {
        Logger.info(`Local Best Bet Result clicked: ${bestBet.title}`);
    }

    return (
        <div className='best-bet-row'>
            <h2 className='best-bet-row__heading'>Top result</h2>
            <div className='best-bet-result'>
                <h3 className='best-bet-result__title'>
                    {
                        bestBet.link ? (
                            <a href={bestBet.link} onClick={logClick}>{bestBet.title}</a>
                        ) : (
                            <span>{bestBet.title}</span>
                        )
                    }
                </h3>
                <div dangerouslySetInnerHTML={{__html: bestBet.displayText}}/>
            </div>
        </div>
    )
}

export default LocalBestBetResult;