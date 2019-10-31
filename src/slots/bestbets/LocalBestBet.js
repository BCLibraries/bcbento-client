/**
 * A Best Bet we created (e.g. a database or LibAnswers response)
 *
 * @property {string} title
 * @property {string} displayText
 * @property {string} link
 */
class LocalBestBet {
    constructor(bestBetResult) {
        this.title = bestBetResult.title;
        this.displayText = bestBetResult.displayText;
        this.link = bestBetResult.link
    }
}

export {LocalBestBet};