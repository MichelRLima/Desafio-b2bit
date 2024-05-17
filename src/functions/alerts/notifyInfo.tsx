import { toast } from "react-toastify";

const notifyInfo = (message: string) => {

    toast.info(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

}

export default notifyInfo