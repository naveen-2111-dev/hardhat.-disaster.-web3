const IsImageUrl = ({Url}) => {
    try {
        const UrlObj = new URL(Url);
        if (UrlObj) {
            return "ok";
        } else {
            return "Failed";
        }
    } catch (error) {
        console.log("error",error);
    }
}

export default IsImageUrl
