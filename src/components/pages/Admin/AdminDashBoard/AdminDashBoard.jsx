import React from 'react'
import Chart from './Chart/Chart'
import TopProduct from './TopProduct/TopProduct'
import './AdminDashBoard.scss'

export default function AdminDashBoard() {
  return (
    <div className="adminDashBoard">
      <Chart />
      <TopProduct />
    </div>
  )
}
