import * as React from 'react'

import Header from './header'
import Footer from './footer'

import { main } from './layout-main.module.css'

const Layout = ({ pageTitle, children }) => {
    return(
        <div>
            <Header name={pageTitle} id="004027"/>
            <div className={main}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout