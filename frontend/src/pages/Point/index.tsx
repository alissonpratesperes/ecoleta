import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiSave } from "react-icons/fi";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import axios from "axios";

import Item from "../../interfaces/Item";
import FederativeUnit from "../../interfaces/FederativeUnit";
import City from "../../interfaces/City";
import logo from "../../assets/logo.svg";
import "./styles.css";
import api from "../../services/api";

    const Point = () => {
        const [ items, setItems ] = useState<Item[]>([]);
        const [ federativeUnits, setFederativeUnits ] = useState<FederativeUnit[]>([]);
        const [ cities, setCities ] = useState<City[]>([]);
        const [ selectedFederativeUnit, setSelectedFederativeUnit ] = useState("0");

            useEffect(() => {
                api.get("/items").then(response => {
                    setItems(response.data.serializedItems);
                });
            }, []);
            useEffect(() => {
                axios.get<FederativeUnit[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(response => {
                    const federativeUnitInitials = response.data.map(uf => {
                        return {
                            sigla: uf.sigla,
                            nome: uf.nome
                        };
                    });
                        setFederativeUnits(federativeUnitInitials);
                });
            }, []);
            useEffect(() => {
                if(selectedFederativeUnit === "0")
                    return;
                        axios.get<City[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedFederativeUnit}/municipios`).then(response => {
                            const cityNames = response.data.map(city => {
                                return {
                                    nome: city.nome
                                };
                            });
                                setCities(cityNames);
                        });                        
            }, [ selectedFederativeUnit ]);

                function handleSelectedFederativeUnit(event: ChangeEvent<HTMLSelectElement>) {
                    const federativeUnit = event.target.value;
                        setSelectedFederativeUnit(federativeUnit);
                }

                    return (
                        <div id="create_point">
                            <header>
                                <img src={ logo } alt="Ecoleta"/>
                                    <Link to="/">
                                        <FiLogOut/>
                                            <strong> Voltar para a Home </strong>
                                    </Link>
                            </header>
                                <form>
                                    <h1> Cadastro do <br/> ponto de coleta. </h1>
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
                                                <MapContainer center={ [ -28.9669647, -51.0436304 ] } zoom={ 15 }>
                                                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                                        <Marker position={ [ -28.9669647, -51.0436304 ] }/>
                                                </MapContainer>
                                                    <div className="field_group">
                                                        <div className="field">
                                                            <label htmlFor="uf"> Unidade Federativa </label>
                                                                <select name="uf" id="uf" value={ selectedFederativeUnit } onChange={ handleSelectedFederativeUnit }>
                                                                    <option value="0"> Selecione um Estado </option>
                                                                        { federativeUnits.map(federativeUnit => (
                                                                            <option key={ federativeUnit.sigla } value={ federativeUnit.sigla }> { federativeUnit.sigla } - { federativeUnit.nome } </option>
                                                                        )) }
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
                                                    { items.map(item => (
                                                        <li key={ item.id }>
                                                            <img src={ item.image_url } alt={ item.title }/>
                                                                <span> { item.title } </span>
                                                        </li>
                                                    )) }
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