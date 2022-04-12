import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {
    searchProduct: (keyword: string) => void
}


const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <Header onSearch={props.searchProduct} />


            <Outlet />

            <Footer />

        </div>
    )
}

export default WebsiteLayout