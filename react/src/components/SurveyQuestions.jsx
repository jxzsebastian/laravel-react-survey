import { PlusIcon } from "@heroicons/react/24/outline";

export default function SurveyQuestions({survey, onSurveyUpdate}) {

    const [model. setModel] = useState({...survey});    

    const addQuestion = () => {
        setModel({
            ...model,
            questions:[
                ...model.questions,
                {
                    id: uuidv4(),
                    type: "text",
                    question: "",
                    description: "",
                    data: {},
                },
            ],
        });
    };
return (
    <>
    <div className="flex justify-between">

        <h3 className="text-2x1 font-bold">Questions</h3>
        <button type="button" className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700" onClick={addQuestion}>

            <PlusIcon className="w-4 mr-2" />
            Add question

            {model.questions.length ? (
                model.questions.map((q,ind) => (
                    <QuestionEditor 
                    key={q.id}
                    index={ind}
                    question={q}
                    questionChange={questionChange}
                    addQuestion={addQuestion}
                    deleteQuestion={deleteQuestion}
                    />
                ))

            ) : (
                <div className="text-gray-400 text-center py-4"> you dont have any questions created</div>
            )}
        </button>
    </div>
    </>
)
}