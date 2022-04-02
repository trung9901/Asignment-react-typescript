import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { create, list, remove, update } from './api/Product';
import PrivateRouter from './components/PrivateRouter';
import ProductList from './components/ProductList';
import Dashboard from './pages/admin/Dashboard';
import ProductAdd from './pages/admin/product/ProductAdd';
import ProductEdit from './pages/admin/product/ProductEdit';
import ProductManager from './pages/admin/product/ProductManager';
import UserManager from './pages/admin/user/UserManager';
import AdminLayout from './pages/layouts/AdminLayout';

import WebsiteLayout from './pages/layouts/WebsiteLayout';
import ProductDetail from './pages/products/ProductDetail';
import ProductPage from './pages/products/ProductPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { ProductType } from './types/Product';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  const onHandleRemove = (id: number) => {
    // remove(id);
    // setProducts(products.filter(item => item._id !== id))
    try {
      if (window.confirm('Are you sure you want to remove')) {

        toast.success("xoa thanh cong");
        remove(id);
        setProducts(products.filter(item => item._id !== id))
      } else {
        toast.error("xoa that bai")
      }
    } catch (error) {

    }

  }
  const onHandleAdd = async (product: ProductType) => {
    // const { data } = await create(product);
    // setProducts([...products, data]);
    try {
      const { data } = await create(product);
      if (data) {
        toast.success("them san pham thanh cong")
        setProducts([...products, data]);
      }
    } catch (error) {

    }
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product);
      if (data) {
        setProducts(products.map(item => item._id == data.id ? data : item));
        toast.success("Sua thanh cong");
      }
    } catch (error) {

    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />} >
          <Route index element={<ProductList products={products} />} />
          <Route path="product">
            <Route index element={<ProductPage />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
          </Route>
          {/* <Route path="users">
            <Route index element={<UserManager />} />
          </Route> */}
        </Route>

      </Routes>
    </div>
  )
}

export default App
