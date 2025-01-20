import imagekit from "../config/imagekit.js";

const imagekitAuth = (req, res) => {
    try {
        const authParams = imagekit.getAuthenticationParameters();
        res.status(200).json(authParams);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate authentication parameters' });
        console.log(error.message);
    }
};

export { imagekitAuth };