import React, { useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
export default function QuestionEditor({
    index = 0,
    question,
    addQuestion,
    deleteQuestion,
    questionChange, 
    
}) {

    const [model, setModel] = useState({...question})
    const {questionTypes} = useStateContext();


        useEffect(() => {
        questionChange(model);
    }, [model])
    
    function upperCaseFirst(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    return (
        <div>
            <div className='flex 'justifiy-between mb-3>
                <h4>
                    {index + 1}. {model.question}
                </h4>
                <div className='flex items-center'>
                    <button onClick={addQuestion} className='flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700' type='button'>
                        <PlusIcon className='w-4' />
                        Add
                    </button>

                    <button onClick={() => deleteQuestion(question) } type='button' className='flex items-center text-xs py-1 px-3 mr-2 rounded-sm border border-transparent
                    text-red-500 hover:border-red-600
                    font-semibold'>
                        <TrashIcon className='w-4'/>
                    </button>
                </div>
            </div>
            <div className='flex gap-3 justify-between mb-3'>
                {/* Questio n Text*/}
                <div className='flex-1'>
                    <label htmlFor="question" className='block text-sm font-medium text-gray-700'>Question</label>
                    <input type="text" name="question" id="question" className='mt-1 block w-full rounded-mb border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
                </div>
                {/* Questio n Text*/}

                {/* Questio n Type*/}
                <div>
                    <label htmlFor="questionType" className='block text-sm font-medium text-gray-700 w-40'>
                        Question Type
                    </label>
                    <select onChange={(ev) => setModel({...model, type: ev.target.value})} name="questionType" className='mt-1 block w-full rounded-mb border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' id="questionType">
                        {questionTypes.map((type) => (
                            <option value={type} selected={model.type == type}>
                                {upperCaseFirst(type)}  
                            </option>
                        ))}
                    </select>
                </div>
                {/* Questio n Type*/}
                {/* Questio n Description*/}
                <div>
                    <label htmlFor="questionDescription" className='block text-sm font-medium text-gray-700'>
                        Description
                    </label>
                    <textarea name="questionDescription" id="questionDescription" value={model.description}
                    onChange={(ev) => setModel({...model, description: ev.target.value})}
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'></textarea>
                </div>
                {/* Questio n Description*/}
            </div>
            
        </div>
    
  )
}
