function FixBrokenImage(fallbackImage) {
    return function (event) {
        event.target.onerror = null;
        event.target.src = fallbackImage;
    }
}

export default FixBrokenImage;