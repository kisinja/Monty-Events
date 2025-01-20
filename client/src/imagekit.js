import ImageKit from 'imagekit-javascript';

const imagekit = new ImageKit({
    publicKey: import.meta.env.IK_PUBLIC_KEY,
    urlEndpoint: import.meta.env.IK_URL,
    authenticationEndPoint:'http://localhost:4890/imagekit/auth',
});

export default imagekit;