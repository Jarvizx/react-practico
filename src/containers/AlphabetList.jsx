import React, {useState, useContext} from 'react';
import '@styles/AlphabetList.scss';
import Modal from '../components/Modal';
import AlphabetResult from '../components/AlphabetResult';
import AppContext from '../context/AppContext';

const AlphabetList = () => {
	const [showModal, setShowModal] = useState({
		status: false,
		type: ''
	});
	const [letter, setLetter] = useState('A')
	const { alphabet } = useContext(AppContext);
	const { letters, def } = alphabet;

	return (
		<section className="alphabet">
			<p className='alphabet-hero'>Selecciona la letra por la que empieza la palabra que estás buscando o busca en el buscador de palabras</p>
			<ul className="alphabet-list">
				{letters.map(a => (
					<li className={`alphabet-item ${letter == a && 'alphabet-item--active' }`} onClick={() => setLetter(a)} key={a}>{a}</li>
				))}
			</ul>
			<div className='alphabet-results'>
				<div className='alphabet-side-left'>
					<div className='alphabet-letter'>{letter}</div>
				</div>
				<div className='alphabet-container'>
					
					{def 
					&& def
					.filter(a => a.word.startsWith(letter))
					.map(l => (
						<AlphabetResult key={l.word} word={l.word} definition={l.definition} />
					))}
					
					<div className='alphabet-search'>
						<input type="text" placeholder='Busca una palabra' />
						<button onClick={()=>setShowModal({status: true, type: 'no-result'})}>Buscar</button>
					</div>
					
					<div className='alphabet--separator'></div>
					
					<div className='alphabet-add-word'>
						<p>
							¡Ayuda a tus colegas escribiendo alguna palabra nueva!
						</p>
						<button onClick={()=>setShowModal({status: true, type: 'add-word'})}>Agregar palabra</button>
					</div>
				</div>
			</div>
			{showModal && (<Modal show={showModal.status} hide={()=>setShowModal({status: false, type: ''})} type={showModal.type} />)}
		</section>
	);
}

export default AlphabetList;
