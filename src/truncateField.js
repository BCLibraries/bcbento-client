/**
 * Truncate a text field, splitting at spaces
 *
 * @param {string} fieldValue
 * @param {number} maxLength
 */
function truncateField(fieldValue, maxLength) {

    // Primo Central sometimes add spurious spaces after names.
    fieldValue = fieldValue.replaceAll(' ;', ';');

    // Catch nulls or undefined.
    if (!fieldValue) {
        return '';
    }

    // Return the string if it's already short enough.
    if (fieldValue.length < maxLength) {
        return fieldValue;
    }

    // Truncate at last space before maxLength and add ellipsis.
    return fieldValue.substr(0, fieldValue.lastIndexOf(' ', maxLength)) + ' […]';
}

export default truncateField;