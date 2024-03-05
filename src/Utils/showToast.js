import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export   function showSuccess(message)
{
    toast.success(message , {
        position: "top-right"
    });
}

export   function showError(message)
{
    toast.error (message , {
        position: "top-right"
    });
}