import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AppContext from '../context/AppContext';
import { FaArrowsAlt } from 'react-icons/fa';
import '@styles/DndWords.scss';


const initialTasks = [
    {
        id: "1",
        text: "React.js",
    },
    {
        id: "2",
        text: "HTML/CSS",
    },
    {
        id: "3",
        text: "AWS",
    },
    {
        id: "4",
        text: "JavaScript",
    },
    {
        id: "5",
        text: "PHP",
    },
    {
        id: "6",
        text: "Python",
    },
];

const Dnd = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const { alphabet } = useContext(AppContext);
	const { letters, def } = alphabet;

    let listWords = [];
        def.splice(0,4).forEach((v,k) => {
            
            listWords.push({
                id: (k+1).toString(),
                word: v.word,
                definition: v.definition
            })
        });
    const [words, setWords] = useState(listWords);


    useEffect(() => {
        console.log('w-->', words)
        console.log('t-->', tasks)

    }, [words])

    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    
    return (
        <DragDropContext
            onDragEnd={(result) => {
                const { source, destination } = result;
                if (!destination) {
                    return;
                }
                if (
                    source.index === destination.index &&
                    source.droppableId === destination.droppableId
                ) {
                    return;
                }

                setWords((prevTasks) =>
                    reorder(prevTasks, source.index, destination.index)
                );
            }}
        >
            <div className="dnd-words">
                <Droppable droppableId="words">
                    {(droppableProvided) => (
                        <div
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            className="words-container"
                        >
                            <div className='words-column-even'>
                                {words && words.map((task, index) => {
                                    return index % 2 == 0 && 
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(draggableProvided) => (
                                            <div
                                                {...draggableProvided.draggableProps}
                                                ref={draggableProvided.innerRef}
                                                {...draggableProvided.dragHandleProps}
                                                className="word-container"
                                            >
                                                <div className='word-title'>
                                                    {task.word}
                                                    <div className='word-icon'><FaArrowsAlt /></div>
                                                </div>
                                                <div className='word-definition'>
                                                    {task.definition}&nbsp;&nbsp;
                                                    <button>Ver todo</button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                })}
                            </div>

                            <div className='words-column-odd'>
                                {words && words.map((task, index) => {
                                    return index % 2 != 0 && 
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(draggableProvided) => (
                                            <div
                                                {...draggableProvided.draggableProps}
                                                ref={draggableProvided.innerRef}
                                                {...draggableProvided.dragHandleProps}
                                                className="word-container"
                                            >
                                                <div className='word-title'>
                                                    {task.word}
                                                    <div className='word-icon'><FaArrowsAlt /></div>
                                                </div>
                                                <div className='word-definition'>
                                                    {task.definition}&nbsp;&nbsp;
                                                    <button>Ver todo</button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                })}
                            </div>
                            {droppableProvided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

export default Dnd;