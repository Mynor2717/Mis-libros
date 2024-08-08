import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ props }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            <div className="card" onClick={() => { setShow(true); setItem() }}>
                <img src={props.portada} alt="" />
                <div className="bottom">
                    <h3 className="title">{props.titulo}</h3>
                    <p className="amount">Leer Sinopsis</p>
                </div>
            </div>

            <Modal
                datos={props}
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
            />

            {
                // datos.map(libro => <Modal
                //     // show={show}
                //     // item={bookItem}
                //     // onClose={() => setShow(false)}
                //     // name={libro.autor}

                // />)
            }
        </>
    )
}

export default Card