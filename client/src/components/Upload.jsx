import axios from 'axios';
import { IKContext, IKUpload } from 'imagekitio-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const authenticator = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BACKENDURL}/imagekit/auth`);

        if (res.status !== 200) {
            throw new Error(`Request failed with status: ${res.status}`);
        }

        const { signature, expire, token } = res.data;

        return { signature, expire, token };
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message || "An error occurred");
    }
};

const Upload = ({ setData, setProgress, children, type }) => {

    const ref = useRef(null);

    const onError = (err) => {
        toast.error('Image upload failed!');
        console.log(err.message);
    };

    const onSuccess = (res) => {
        setData(res.url);
    };

    const onUploadProgress = (progress) => {
        setProgress(Math.round((progress.loaded / progress.total) * 100));
    };

    return (
        <IKContext
            publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
            urlEndpoint={import.meta.env.VITE_IK_URL}
            authenticator={authenticator}
        >
            <IKUpload
                useUniqueFileName
                onError={onError}
                onSuccess={onSuccess}
                onUploadProgress={onUploadProgress}
                className='hidden'
                ref={ref}
                accept={`${type}/*`}
            />
            <div onClick={() => ref.current.click()} className="cursor-pointer">
                {children}
            </div>
        </IKContext>
    );
};

export default Upload;