import React, { useState } from "react";
import Card from "./Card";

const Main = () => {
    const [search, setsearch] = useState("");
    const searchBook = (evet) => {
        if (evet.key === "Enter") {
            console.log("hello");
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>Una habitacion sin libros es<br /> como un cuerpo sin alma</h1>
                </div>
                <div className="row2">
                    <h2>Encuentra tu libro</h2>
                    <div className="search">
                        <input type="text" placeholder="Introduce el nombre de tu libro"
                            value={search}
                            onChange={e => setsearch(e.target.value)}
                            onKeyPress={searchBook} />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
            <div className="container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Main;