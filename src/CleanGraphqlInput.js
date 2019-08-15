function CleanGaphqlInput(string) {
    return string.replace(/"/g, '\\"').replace('/\\/g','\\');
}

export default CleanGaphqlInput;