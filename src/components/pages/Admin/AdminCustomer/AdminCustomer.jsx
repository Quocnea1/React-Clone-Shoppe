import React from 'react'
import AdminCustomerTable from './AdminCustomerTable/AdminCustomerTable'
import "./AdminCustomer.scss"
import { customerTable } from '../../../../utils/dataConfig'

export default function AdminCustomer() {

  const { info } = customerTable;
  return (
    <div className="adminCustomer">
      <div className="adminContainer">
        <AdminCustomerTable data={info} />
      </div>
    </div>
  )
}
