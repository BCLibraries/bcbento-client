import React from "react";

function BestBetResult({bestBet}) {
    const title = bestBet.link ? (
        <a href={bestBet.link}>{bestBet.title}</a>
    ) : (<span>{bestBet.title}</span>);


    return (
        <div className='best-bet-row'>
            <h3 className='best-bet-row__heading'>Top result</h3>
            <div className='best-bet-result'>
                <h3 className='best-bet-result__title'>{title}</h3>
                <div dangerouslySetInnerHTML={{__html: bestBet.displayText}}/>
            </div>
        </div>
    )
}

export default BestBetResult;