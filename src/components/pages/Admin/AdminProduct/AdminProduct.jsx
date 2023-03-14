import "./AdminProduct.scss";

import React from 'react'
import AddProduct from './AddProduct/AddProduct';
import AllProduct from './AllProduct/AllProduct';
import { subCategoryList } from '../../../../utils/dataConfig';

export default function AdminProduct() {
  return (
    <div className="adminProduct">
      <AddProduct subCategoryList={subCategoryList} />
      <AllProduct />
    </div>
  );
}
