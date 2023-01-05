import React,{useState, useEffect} from "react";
import "./Login.css";

function Login() {
  const [names, setNames] = useState("")

  useEffect(()=>{
    fetch("http://192.168.1.30/CGCPAPI/api/MPCustomer/GetInvoiceDetails?strManageType=S&strInstallerId=0&struserid=0&strgroupid=0&strSchduleId=0&strcustId=0&StrInvoiceId=88")
        .then((response) => response.json())
        .then(names => setNames(names));
  }, [])

  return (
    <div className="container">
      <div className="sub-container">
        <div className="logo">
          <img src="http://192.168.1.30/CGCPCUSTOMER/assets/media/logos/la-solar%20new.jpg" alt="logo1" />
        </div>
        <div className="sub-logo">
          <img src="http://192.168.1.30/CGCPCUSTOMER/assets/media/logos/LOGO_AUTH.png" alt="logo2" />
        </div>
        <div className="main">
            <h1>Hi, {names.Invoicefor}</h1>
            <p>{names.CustomerEmail}</p>
            {/* <p>Please check your email for a token sent for security puroses for you to Login<br>
            </br>and pay your invoice</p> */}
            <h4>{names.CustomerEmail}</h4>
            {/* <h4>Anushka@yahoo.com</h4> */}
        </div>
        <div className="sub-main">
            <h4>Type your soft spoken</h4>
            <input type="text" placeholder=""/>
            <br></br>
            <a href="#" className="link">click here to resend the token</a>
        </div>
        <div>
        <button>Login</button>

        </div>
      </div>
    </div>
  );
}

export default Login;
