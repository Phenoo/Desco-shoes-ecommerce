import React, { useMemo, useState } from 'react'
import '../styles/globals.css'
import '../styles/App.scss'

import {Toaster} from 'react-hot-toast'

import { Layout } from '../components'
import {StateContext} from '../context/StateContext'


function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <Layout>
                <Toaster />
                <Component {...pageProps } />
            </Layout>
        </StateContext>
    )
}

export default MyApp