import { ToastContainer } from "react-toastify";
import { AppRouter } from "./routers";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./context/AuthContext";

export default function App(){
    return (
        <AuthProvider>
            <AppRouter/>
            <ToastContainer
                position='bottom-center'
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                draggable
            />
        </AuthProvider>
    )
}
