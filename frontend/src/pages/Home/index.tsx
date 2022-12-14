import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import "./styles.css";

    const Home = () => {
        return (
            <div id="home">
                <div className="content">
                    <header>
                        <img alt="Ecoleta" src={logo}/>
                    </header>
                        <main>
                            <h1> Seu marketplace de coleta de resíduos. </h1>
                                <p> Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente. </p>
                                    <Link to="/point">
                                        <span>
                                            <FiLogIn/>
                                        </span>
                                            <strong> Cadastre um novo ponto de coleta </strong>
                                    </Link>
                        </main>
                </div>
            </div>
        );
    };

        export default Home;