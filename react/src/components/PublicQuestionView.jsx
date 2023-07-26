export default function PublicQuestionView({question, index, answerChanged}) {
  return (
    <>
      <fieldset className="mb-4">
        <div>
          <legend className="text-base font-medium text-gray-900">
            {index + 1}. {question.question}
          </legend>
          <p className="text-gray-500 text-sm"> {question.description}</p>
        </div>

        <div className="mt-3">
          {question.type === "select" && (
            
          )}
          {question.type === "radio" && (
            
          )}
          {question.type === "checkbox" && (
            
          )}
        </div>
      </fieldset>
      <hr className="mb-4" />   
    </>
  )
} 
  