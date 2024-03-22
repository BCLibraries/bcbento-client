/**
 * Cleans user input for submitting to GraphQL
 *
 * We don't want to send unescaped quotes, strange escape sequences, or newlines to our
 * search services
 *
 * @param {string} string The search string
 * @return {string}
 */
function cleanGraphQLInput(string) {
    return string.replace(/"/g, '\\"').replace('/\\/g', '\\').replace(/(\r\n|\n|\r)/gm,' ');
}

export {cleanGraphQLInput};
