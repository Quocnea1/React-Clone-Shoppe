import './AdminCategory.scss'
import React from 'react'
import AddCategory from './AddCategory/AddCategory';
import AllCategory from './AllCategory/AllCategory';
import { categoryList } from '../../../../utils/dataConfig';

export default function AdminCategory() {

  return (
    <div className="adminCategory">
      <AddCategory />
      <AllCategory data={categoryList} />
    </div>
  )
}
