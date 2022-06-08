import React, {useState} from 'react';
import '@styles/AlphabetList.scss';
import { FaStar, FaCog, FaArrowsAlt, FaCaretLeft } from 'react-icons/fa';
import { ImSun, ImContrast } from "react-icons/im";
import { GoTextSize } from "react-icons/go";
import { MdHearing } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import Modal from '../components/Modal';

// https://react-icons.github.io/react-icons/icons?name=fa
//#region alphabet
const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z"
  ]
//#endregion

const AlphabetList = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<section className="alphabet">
			<p className='alphabet-hero'>Selecciona la letra por la que empieza la palabra que estás buscando o busca en el buscador de palabras</p>
			<ul className="alphabet-list">
				{alphabet.map(a => (
					<li className='alphabet-item' key={a}>{a}</li>
				))}
			</ul>
			<div className='alphabet-results'>
				<div className='alphabet-side-left'>
					<div className='alphabet-letter'>C</div>
				</div>
				<div className='alphabet-container'>
					
					<div className='alphabet-result'>
						<div className='alphabet-letter-detail'>
							<h4>Cloud</h4>
							<div className='alphabet-add-highlight'><FaStar /></div>

						</div>
						<div className='alphabet-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
					</div>
					
					<div className='alphabet-search'>
						<input type="text" placeholder='Busca una palabra' />
						<button>Buscar</button>
					</div>
					
					<div className='alphabet--separator'></div>
					
					<div className='alphabet-add-word'>
						<p>
							¡Ayuda a tus colegas escribiendo alguna palabra nueva!
						</p>
						<button onClick={()=>setShowModal(true)}>Agregar palabra</button>
					</div>
				</div>
			</div>
			{showModal && (<Modal show={showModal} hide={()=>setShowModal(false)} type={'add-word'} />)}

			{/* <div>
			<hr />
			<FaArrowsAlt />
			<FaCaretLeft />
			<GrClose />
			</div> */}
		</section>
	);
}

export default AlphabetList;
