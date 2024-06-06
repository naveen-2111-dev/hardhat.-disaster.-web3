const IsImageUrl = ( Url ) => {
    try {
        const UrlObj = new URL(Url);
        return true;
    } catch (error) {
        console.error("Error validating URL:", error);
        return false;
    }
}

export default IsImageUrl;
