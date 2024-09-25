import "./LoginPage.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <div className="container login-container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 login-form-1">
            <h3>Ingreso</h3>
            <form>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo"
                />
              </div>
              <div className="form-group mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
              </div>
              <div className="d-grid gap-2">
                <input type="submit" className="btnSubmit" value="Login" />
              </div>
              <div><Link to="/auth/register" className="ForgetPwd">¿Ya tienes una cuenta?, Inicia sesión.</Link></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
