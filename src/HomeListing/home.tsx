import React from 'react';
import './home.css';

function Home() {
    return (
        <>
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand d-lg-none" href="/">
                                <img src="/images/logo.svg" />
                            </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/#">SERVICES</a>
                            </li>
                            <a className="navbar-brand d-none d-lg-block" href="/">
                                <img src="/images/logo.svg" />
                            </a>
                            <li className="nav-item">
                                <a className="nav-link active" href="/#">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href='/#'>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
        <div className="page-container">
                <div className="background-image">
                </div>
                <div className="content">
                    <h1 className='p1'>Connecting clients with the world through tailor-made itineraries</h1>
                    <h1 className='p2'>as unique as you are</h1>
                </div>




            </div>
            
        </>
    )
}
export default Home;