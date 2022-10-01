import React from 'react'
import "./Menubar.css"

const menubar = () => {
    const { firstName } = sessionStorage;
    return (

        <div>
            <nav class="navbar navbar-expand-xl navbar-light bg-white">
                <div class="container-fluid" id='MenubarNav'>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbar"
                        aria-controls="navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarExample01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active pr-4">
                                <a class="nav-link pr-4" aria-current="page" href="/homePage">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/profile">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/cart">Cart</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/faq">FAQ's</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default menubar
