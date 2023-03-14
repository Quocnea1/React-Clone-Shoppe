import React from 'react'
import CustomerInfoTable from './CustomerInfoTable/CustomerInfoTable'
import "./AdminCustomerTable.scss"

export default function AdminCustomerTable({ data }) {
    return (
        <div className="adminCustomerTable">
            <div className="customerTable">
                <div className="customerTable-heading">
                    <p>Tên</p>
                    <p>Thời gian tạo</p>
                    <p>Email</p>
                </div>
                <div className="customerTable-info">
                    {data.map((_data, index) => (
                        <CustomerInfoTable data={_data} index={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}
