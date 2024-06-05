const IsImageUrl = ({ Url }) => {
    try {
        const UrlObj = new URL(Url);
        return "ok";
    } catch (error) {
        console.error("Error validating URL:", error);
        return "Failed";
    }
}

export default IsImageUrl;
