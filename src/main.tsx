import ReactDOM from 'react-dom/client'
import './index.css'
import './satoshi.css';

import {AuthContextProvider} from './context/AuthContext.tsx'
import { Routes } from './router/router.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthContextProvider>
        <Routes/>
    </AuthContextProvider>
)
