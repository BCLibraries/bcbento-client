function FixBrokenImage(fallbackImage, imgClass) {
    return function (event) {
        event.target.onerror = null;
        event.target.src = fallbackImage;
        if (imgClass) {
            event.target.className = imgClass;
        }
    }
}

export default FixBrokenImage;