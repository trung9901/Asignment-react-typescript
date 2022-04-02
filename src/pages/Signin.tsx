import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';
import { authenticated } from '../utils/localStorage';

type TypeInputs = {
    email: string,
    password: string
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const { data: user } = await signin(data);
        console.log(user);
        // localstorage
        authenticated(user, () => {
            navigate('/');
        })
    }
    return (

        <div className="main-index">

            <div className="page-content-account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <div className="border border-2 border-danger m-5 row">
                                <div className="col-8 p-4">
                                    <div className="group-login group-log">
                                        <h1>
                                            Đăng nhập tài khoản
                                        </h1>
                                        <form onSubmit={handleSubmit(onSubmit)} >
                                            <input name="FormType" type="hidden" defaultValue="customer_login" />
                                            <input name="utf8" type="hidden" defaultValue="true" />
                                            <p className="error">
                                            </p>
                                            <fieldset className="form-group">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" className="form-control form-control-lg" id="customer_email" placeholder="Email" required {...register('email')} />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label>Mật khẩu <span className="required">*</span> </label>
                                                <input type="password" className="form-control form-control-lg" id="customer_password" placeholder="Mật khẩu" required {...register('password')} />
                                            </fieldset>
                                            <button className="btn btn-danger mx-auto" type="submit" value="Đăng nhập">Đăng nhập</button>
                                        </form>
                                        <div className="block social-login--facebooks">
                                            <p className="a-center">
                                                <span>Hoặc đăng nhập bằng</span>
                                            </p>
                                            <a href="javascript:void(0)" className="social-login--facebook" ><img width="129px" height="37px" alt="facebook-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" /></a>
                                            <a href="javascript:void(0)" className="social-login--google" ><img width="129px" height="37px" alt="google-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" /></a>
                                        </div>
                                        <p className="text-center">
                                            Bạn quên mật khẩu bấm <a href="#" className="text-danger text-decoration-underline" >vào đây</a>
                                        </p>
                                    </div>
                                    <div className="group-login group-recover d-none">
                                        <h2>
                                            Quên mật khẩu
                                        </h2>
                                        <p className="description">
                                            Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.
                                        </p>
                                        <form acceptCharset="utf-8" action="/account/recover" id="recover_customer_password" method="post">
                                            <input name="FormType" type="hidden" defaultValue="recover_customer_password" />
                                            <input name="utf8" type="hidden" defaultValue="true" />
                                            <p className="error">
                                            </p>
                                            <fieldset className="form-group">
                                                <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" name="Email" id="recover-email" placeholder="Email" required />
                                            </fieldset>
                                            <input className="btn-login" type="submit" defaultValue="Gửi yêu cầu" />
                                            <a href="#" className="btn-ref" >Hủy</a>
                                        </form>
                                    </div>
                                </div>
                                <div className="col bg-danger text-white p-5" >
                                    <h4>
                                        Quyền lợi với thành viên
                                    </h4>
                                    <div>
                                        <p>Vận chuyển siêu tốc</p>							<p>Sản phẩm đa dạng				</p>							<p>Đổi trả dễ dàng</p>
                                        <p>Tích điểm đổi quà</p>						<p>Được giảm giá cho lần mua tiếp theo lên đến 10%						</p>
                                    </div>
                                    <a href="/signup" className="btn border border-white text-white">Đăng ký</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signin