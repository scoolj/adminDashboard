import React from "react";
import ReactDOM from 'react-dom'
import {registerLicense} from '@syncfusion/ej2-base'
import './index.css'
import App from './App'
// require('dotenv').config()
import { ContextProvider } from "./contexts/ContextProvider";

// Registering syncfusion License key
registerLicense(process.env.REACT_APP_REGISTER_LICENSE_SYNCFUSION)



ReactDOM.render(
<ContextProvider>

<App />
</ContextProvider>,
document.getElementById('root'));

