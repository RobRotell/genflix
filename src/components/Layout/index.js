import React from 'react'

import Footer from '../Footer'
import Header from '../Header'

import '../../styles/global.css'
import * as styles from './style.module.css'



const Layout = ({ children, location }) => (
    <div className={styles.container}>
		{<Header location={location} />}
        {children}
		{<Footer />}
    </div>
)


export default Layout
