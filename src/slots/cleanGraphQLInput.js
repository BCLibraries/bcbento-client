/**
 * Cleans user input for submitting to GraphQL
 *
 * @param string string The search string
 * @return {void | string | never}
 */
function cleanGraphQLInput(string) {
    return string.replace(/"/g, '\\"').replace('/\\/g', '\\');
}

export {cleanGraphQLInput};