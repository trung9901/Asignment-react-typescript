import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { create, list, remove, update } from './api/Product';
import PrivateRouter from './components/PrivateRouter';
import ProductList from './components/HomePage';
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
import { UserType } from './types/User';
import { addusers, listusers, removeusers, updateusers } from './api/User';
import { addPost, listPost, removePost, updatePost } from './api/Post';
import { PostType } from './types/Post';
import { CategoryType } from './types/Category';
import { addCategory, listCategory, removeCategory, updateCategory } from './api/Category';
import CategoryManager from './pages/admin/category/CategoryManager';
import CategoryEdit from './pages/admin/category/CategoryEdit';
import CategoryAdd from './pages/admin/category/CategoryAdd';
import UserEdit from './pages/admin/user/UserEdit';
import PostManager from './pages/admin/post/PostManager';
import PostAdd from './pages/admin/post/PostAdd';
import PostEdit from './pages/admin/post/PostEdit';
import HomePage from './components/HomePage';


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [users, setUsers] = useState<UserType[]>([])
  const [posts, setPosts] = useState<PostType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  useEffect(() => {
    // product
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();

    // user
    const getUsers = async () => {
      const { data } = await listusers();
      setUsers(data);
    }
    getUsers();

    // post
    const getPosts = async () => {
      const { data } = await listPost();
      setPosts(data);
    }
    getPosts();

    // category
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategories(data);
    }
    getCategories();


  }, []);


  // product
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
    // const { data } = await update(product);
    // setProducts(products.map(item => item.id == data.id ? data : item));
    try {
      const { data } = await update(product);
      if (data) {
        toast.success("Sua thanh cong");
        setProducts(products.map(item => item._id == data._id ? product : item))
      }
    } catch (error) {

    }
  }


  // user
  const UserRemove = (id: number) => {
    try {
      if (window.confirm('Are you sure you want to remove')) {

        toast.success("xoa thanh cong");
        removeusers(id);
        setUsers(users.filter(item => item._id !== id))
      } else {
        toast.error("xoa that bai")
      }
    } catch (error) {

    }
  }
  const UserAdd = async (user: UserType) => {
    try {
      const { data } = await addusers(user);
      if (data) {
        toast.success("Them thanh cong");
        setUsers([...users, data]);
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  const UserUpdate = async (user: UserType) => {
    try {
      const { data } = await updateusers(user);
      if (data) {
        toast.success("Sua thanh cong");
        setUsers(users.map(item => item._id == data._id ? user : item))
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }

  // post

  const PostsRemove = (id: number) => {
    try {
      if (window.confirm('Are you sure you want to remove')) {

        toast.success("xoa thanh cong");
        removePost(id);
        setPosts(posts.filter(item => item._id !== id))
      } else {
        toast.error("xoa that bai")
      }
    } catch (error) {

    }
  }
  const PostsAdd = async (post: PostType) => {
    try {
      const { data } = await addPost(post);
      if (data) {
        toast.success("Them thanh cong");
        setPosts([...posts, data]);
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  const PostsUpdate = async (post: PostType) => {
    try {
      const { data } = await updatePost(post);
      if (data) {
        toast.success("Sua thanh cong");
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }

  // category
  const CategoriesRemove = (id: number) => {
    try {
      if (window.confirm('Are you sure you want to remove')) {

        toast.success("xoa thanh cong");
        removeCategory(id);
        setCategories(categories.filter(item => item._id !== id))
      } else {
        toast.error("xoa that bai")
      }
    } catch (error) {

    }
  }
  const CategoriesAdd = async (category: CategoryType) => {
    try {
      const { data } = await addCategory(category);
      if (data) {
        toast.success("Them thanh cong");
        setCategories([...categories, data]);

      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  const CategoriesUpdate = async (category: CategoryType) => {
    try {
      const { data } = await updateCategory(category);
      if (data) {
        toast.success("Sua thanh cong");
        setCategories(categories.map(item => item._id == data._id ? category : item))
      }
    } catch (error) {

    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />} >
          <Route index element={<HomePage categories={categories} products={products} />} />
          <Route path="products">
            <Route index element={<ProductPage products={products} />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />


          {/* product */}
          <Route path="products">
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} categories={categories} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} categories={categories} />} />
          </Route>

          {/* category */}
          <Route path="categories">
            <Route index element={<CategoryManager categories={categories} onRemove={CategoriesRemove} />} />
            <Route path=":id/edit" element={<CategoryEdit onUpdate={CategoriesUpdate} />} />
            <Route path="add" element={<CategoryAdd onAdd={CategoriesAdd} />} />
          </Route>


          {/* user */}
          <Route path="users">
            <Route index element={<UserManager users={users} onRemove={UserRemove} />} />

            <Route path=":id/edit" element={<UserEdit onUpdate={UserUpdate} />} />
          </Route>


          {/* post */}
          <Route path="posts">
            <Route index element={<PostManager posts={posts} onRemove={PostsRemove} />} />
            <Route path=":id/edit" element={<PostEdit onUpdate={PostsUpdate} />} />
            <Route path="add" element={<PostAdd onAdd={PostsAdd} />} />

          </Route>
        </Route>

      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
