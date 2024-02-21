import React from 'react'
import Layout from './src/components/Layout'

import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'


export function wrapPageElement( { element, props } ) {
    return <Layout {...props}>{element}</Layout>
}
