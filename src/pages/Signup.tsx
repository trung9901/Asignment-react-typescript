import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

type TypeInputs = {
    name: string,
    email: string,
    password: string
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        signup(data);
        navigate("/signin");
    }
    return (
        <div className="page-content-account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <div className="d-group row border border-2 border-danger m-5">
                            <div className="col-8 p-4">
                                <div className="group-login group-log">
                                    <h1>
                                        Đăng ký tài khoản
                                    </h1>
                                    <form acceptCharset="utf-8" method="post">
                                        <input name="FormType" type="hidden" defaultValue="customer_register" />
                                        <input name="utf8" type="hidden" defaultValue="true" /><input type="hidden" id="Token-38479df13c0348c59a8b6212a3c4c0d7" name="Token" />
                                        <p className="error">
                                        </p>

                                        <fieldset className="form-group">
                                            <label>Tên <span className="required">*</span></label>
                                            <input type="text" className="form-control form-control-lg" name="firstName" id="firstName" placeholder="Tên" required />
                                        </fieldset>

                                        <fieldset className="form-group">
                                            <label>Email <span className="required">*</span></label>
                                            <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" name="email" id="email" placeholder="Email" required />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Mật khẩu <span className="required">*</span> </label>
                                            <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Mật khẩu" required />
                                        </fieldset>
                                        <button className="btn-login btn btn-danger mx-auto" type="submit" value="Đăng ký">Đăng ký</button>
                                    </form>
                                    <div className="block social-login--facebooks">
                                        <p className="a-center">
                                            <span>Hoặc đăng nhập bằng</span>
                                        </p>
                                        <a href="" className="social-login--facebook" ><img width="129px" height="37px" alt="facebook-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" /></a>
                                        <a href="" className="social-login--google" ><img width="129px" height="37px" alt="google-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col bg-danger text-white p-5">
                                <h4>
                                    Quyền lợi với thành viên
                                </h4>
                                <div>
                                    <p>Vận chuyển siêu tốc</p>							<p>Sản phẩm đa dạng				</p>							<p>Đổi trả dễ dàng</p>
                                    <p>Tích điểm đổi quà</p>						<p>Được giảm giá cho lần mua tiếp theo lên đến 10%						</p>
                                </div>
                                <a href="/signin" className="btn-register-default btn border border-white text-white">Đăng nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup