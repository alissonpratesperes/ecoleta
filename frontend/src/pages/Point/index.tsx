import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiSave } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import "./styles.css";

    const Point = () => {
        return (
            <div id="create_point">
                <header>
                    <img src={logo} alt="Ecoleta"/>
                        <Link to="/">
                            <FiLogOut/>
                                <strong> Voltar para a Home </strong>
                        </Link>
                </header>
                    <form>
                        <h1> Cadastro do <br/> ponto de coleta </h1>
                            <fieldset>
                                <legend> <h2> Dados </h2> </legend>
                                    <div className="field">
                                        <label htmlFor="name"> Nome da Entidade </label>
                                            <input type="text" name="name" id="name"/>
                                    </div>
                                    <div className="field_group">
                                        <div className="field">
                                            <label htmlFor="email"> E-mail </label>
                                                <input type="email" name="email" id="email"/>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="whatsapp"> WhatsApp </label>
                                                <input type="text" name="whatsapp" id="whatsapp"/>
                                        </div>
                                    </div>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    <h2> Endereço </h2>
                                        <span> Selecione o endereço no Mapa </span>
                                </legend>
                                    <div className="field_group">
                                        <div className="field">
                                            <label htmlFor="uf"> Estado (UF) </label>
                                                <select name="uf" id="uf">
                                                    <option value="0"> Selecione uma UF </option>
                                                </select>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="city"> Cidade </label>
                                                <select name="city" id="city">
                                                    <option value="0"> Selecione uma Cidade </option>
                                                </select>
                                        </div>
                                    </div>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    <h2> Itens de Coleta </h2>
                                        <span> Selecione um ou mais Itens abaixo </span>
                                </legend>
                                    <ul className="items_grid">
                                        <li className="selected">
                                            <img src="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg" alt="teste"/>
                                                <span> Lâmpadas e Iluminação </span>
                                        </li>
                                        <li>
                                            <img src="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg" alt="teste"/>
                                                <span> Lâmpadas e Iluminação </span>
                                        </li>
                                        <li>
                                            <img src="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg" alt="teste"/>
                                                <span> Lâmpadas e Iluminação </span>
                                        </li>
                                        <li>
                                            <img src="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg" alt="teste"/>
                                                <span> Lâmpadas e Iluminação </span>
                                        </li>
                                        <li>
                                            <img src="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg" alt="teste"/>
                                                <span> Lâmpadas e Iluminação </span>
                                        </li>
                                        <li className="selected">
                                            <img src="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg" alt="teste"/>
                                                <span> Lâmpadas e Iluminação </span>
                                        </li>
                                    </ul>
                            </fieldset>
                                <button type="submit">
                                    <span>
                                        <FiSave/>
                                    </span>
                                        <strong>
                                            Cadastrar ponto de coleta
                                        </strong>
                                </button>
                    </form>
            </div>
        );
    };

        export default Point;