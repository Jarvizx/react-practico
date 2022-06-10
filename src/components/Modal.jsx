import React, { useEffect, useRef } from 'react';
import '@styles/Modal.scss';

const Modal = ({ show, hide, type }) => {
    const modalContent = useRef(null)
    useEffect(() => {
        const handlerClickOutside = (event) => {
            if (modalContent.current && !modalContent.current.contains(event.target)) {
                hide(false);
            }
        }
        document.addEventListener("mousedown", handlerClickOutside);
        return () => {
            document.removeEventListener("mousedown", handlerClickOutside);
        };
    }, [modalContent])

    return (
        <div className={`modal ${show ? 'modal--show' : ''}`}>
            <div ref={modalContent} className="modal-content">
                <button className="close" onClick={() => hide(false)}>X</button>
                {type == 'add-word' && (
                    <>
                        <div className='alphabet-box-input'>
                            <input type="text" placeholder='Escribe una palabra o concepto nuevo' />
                        </div>
                        <div className='alphabet-box-input'>
                            <textarea rows="6" placeholder='Escribe el significado de esa palabra o concepto nuevo. También puedes añadir algunos ejemplos.'>
                            </textarea>
                        </div>
                        <button className='add-word'>Agregar Palabra</button>
                    </>
                )}
                {type == 'no-result' && (
                    <>
                        <p className='alphabet-no-result'>
                            !Lo sentimos¡ no tenemos esa palabra en nuestro glosario pero te invitamos a que la consultes con expertos o con tus mismos colegas. Una vez tengas claro el significado, puedes agregarlo a nuestra colección de palabras digitales. ¡Construyamos juntos!
                        </p>
                    </>
                )}

            </div>
        </div>
    );
}
export default Modal;