import React, { Component } from 'react'
import Header from '../BaiTapLayoutComponent/Header'
import Footer from '../BaiTapLayoutComponent/Footer'
import { Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
  render() {
    return (
        <div>
        <Header />
        <div style={{ minHeight: 650 }}>
            <Outlet />
        </div>
        <Footer />
    </div>
    )
  }
}
