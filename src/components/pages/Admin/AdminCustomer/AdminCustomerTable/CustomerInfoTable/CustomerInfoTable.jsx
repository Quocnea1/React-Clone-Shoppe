import React from 'react'
import "./CustomerInfoTable.scss"


export default function CustomerInfoTable({ data }) {
    return (
        <div className="customer-info-table">
            <div className="customer-info-name">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GJoRJ64Qv4yF1e1CWg3LgtyCs-hG5-_Uiw&usqp=CAU" alt="anh-nguoi-dung"></img>
                <p>{data.user}</p>
            </div>
            <div className="customer-info-time">
                <p>{data.time}</p>
            </div>
            <div className="customer-info-email">
                <p>{data.email}</p>
            </div>
            <div className="customer-info-icon">
                <button className="btn-find">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className="btn-edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="btn-delete">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>


        </div>



    )
}
