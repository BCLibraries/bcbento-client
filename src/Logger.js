/**
 * Log client events to server
 *
 * Used to report back on significant events (errors, debug info, etc). Log events
 * are flushed to the server in batches to reduce server traffic.
 */

/**
 * Events queue
 *
 * @type {Array}
 */
const events = [];

/**
 * Total score of events in queue
 *
 * @type {number}
 */
let totalLogScore = 0;

/**
 * Send all the events in queue when score matches this.
 *
 * @type {number}
 */
const flushOnScore = 10;

// Flush log on page close.
window.addEventListener("unload", flush, false);

/**
 * Add an event to the log and flush if needed.
 *
 * @param {string} level
 * @param {string} message
 * @param {number} score
 */
function addEntry(level, message, score = 1) {

    // Add to entries queue.
    events.push({level, message});

    // If log score is over a certain amount, flush.
    totalLogScore += score;
    if (totalLogScore > flushOnScore) {
        flush();
    }
}

const Logger = {
    /**
     * @param {string} message
     */
    emergency: message => {
        addEntry('emergency', message, 100);
        flush();
    },

    /**
     * @param {string} message
     */
    alert: message => {
        addEntry('alert', message, 10);
    },

    /**
     * @param {string} message
     */
    critical: message => {
        addEntry('critical', message, 10);
        flush();
    },

    /**
     * @param {string} message
     */
    error: message => {
        addEntry('error', message, 3);
    },

    /**
     * @param {string} message
     */
    warning: message => {
        addEntry('warning', message, 2);
    },

    /**
     * @param {string} message
     */
    info: message => {
        addEntry('info', message);
    },

    /**
     * @param {string} message
     */
    debug: message => {
        addEntry('debug', message);
    }
};

function sendEntries() {
    const data = JSON.stringify({
        events: events
    });
    navigator.sendBeacon(process.env.VITE_LOGGING_ENDPOINT, data);
}

// Send entries and zero-out the list.
function flush() {
    sendEntries();
    events.length = 0;
    totalLogScore = 0;
}

export {Logger};
