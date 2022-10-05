import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiSave } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
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
        const [ selectedFederativeUnit, setSelectedFederativeUnit ] = useState("");
        const [ selectedCity, setSelectedCity ] = useState("");
        const [ initialPosition, setInitialPosition ] = useState<[number, number]>([0, 0]);
        const [ selectedPosition, setSelectedPosition ] = useState<[number, number]>([0, 0]);

            useEffect(() => {
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;

                        setInitialPosition([
                            latitude,
                            longitude
                        ]);
                });
            }, []);
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
                };
                function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
                    const city = event.target.value;
                        setSelectedCity(city);
                };
                function HandleClickedCoordinates() {
                    useMapEvents({
                        click: (event) => {
                            setSelectedPosition([
                                event.latlng.lat,
                                event.latlng.lng
                            ]);

                            console.log(event.latlng.lat,
                                event.latlng.lng)
                        }
                    });
                        return null;
                };
                function HandleCoordinatesState(props: any) {
                    const map = useMap();

                        map.panTo(props.centerMap);

                            return null;
                };

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
                                                    <span> Selecione o endereço no mapa </span>
                                            </legend>
                                                <MapContainer center={ initialPosition } zoom={ 15 }>
                                                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                                        <Marker position={ selectedPosition }/>
                                                            <HandleClickedCoordinates/>
                                                                <HandleCoordinatesState centerMap={ initialPosition }/>
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
                                                                <select name="city" id="city" value={ selectedCity } onChange={ handleSelectedCity }>
                                                                    <option value="0"> Selecione uma Cidade </option>
                                                                        { cities.map(city => (
                                                                            <option key={ city.nome } value={ city.nome }> { city.nome } </option>
                                                                        )) }
                                                                </select>
                                                        </div>
                                                    </div>
                                        </fieldset>
                                        <fieldset>
                                            <legend>
                                                <h2> Itens de Coleta </h2>
                                                    <span> Selecione um ou mais itens abaixo </span>
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