import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { create, list, remove, update } from './api/Product';
import PrivateRouter from './components/PrivateRouter';
import ProductList from './components/ProductList';
import Dashboard from './pages/admin/Dashboard';
import ProductAdd from './pages/admin/ProductAdd';
import ProductEdit from './pages/admin/ProductEdit';
import ProductManager from './pages/admin/ProductManager';
import AdminLayout from './pages/layouts/AdminLayout';

import WebsiteLayout from './pages/layouts/WebsiteLayout';
import ProductDetail from './pages/products/ProductDetail';
import ProductPage from './pages/products/ProductPage';
import { ProductType } from './types/Product';


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
    remove(id);
    setProducts(products.filter(item => item.id !== id))
  }
  const onHandleAdd = async (product: ProductType) => {
    const { data } = await create(product);
    setProducts([...products, data]);
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item.id == data.id ? data : item));
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
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
            {/* <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} /> */}
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
          </Route>
        </Route>
        <Route path="login" element={<h1>Login page</h1>} />
      </Routes>
    </div>
  )
}

export default App
