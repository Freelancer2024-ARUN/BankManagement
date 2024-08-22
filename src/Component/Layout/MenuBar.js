import { Outlet, Link } from "react-router-dom";

function MenuBar() {
    return (
        <div className="MenuBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fs-4" href="/Home"><i className="fa fa-university"
                        aria-hidden="true"></i>&nbsp;Bank Management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white fs-6" href="/Home"><i className="fa fa-home"
                                    aria-hidden="true"></i>&nbsp;Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-6" href="/CustomerDetails"><i className="fa fa-users"
                                    aria-hidden="true"></i>&nbsp;Customer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-6" href="/Deposit"><i className="fa fa-money"
                                    aria-hidden="true"></i>&nbsp;Deposit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-6" href="/Withdraw"><i className="fa fa-money"
                                    aria-hidden="true"></i>&nbsp;Withdraw</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-6" href='/Transfer'><i className="fa fa-exchange"
                                    aria-hidden="true"></i>&nbsp;Transfer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}
export default MenuBar;
