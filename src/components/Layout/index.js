import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import '../../styles/global.css'

import * as styles from './style.module.css'

const Layout = ({ children }) => (
    <div className={styles.container}>
		{<Header />}
        {children}
		{<Footer />}
    </div>
)


export default Layout
