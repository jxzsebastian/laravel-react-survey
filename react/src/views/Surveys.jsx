import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import axiosClient from "../axios";
import PaginationLinks from "../components/PaginationLinks";
import router from "../router";

export default function Surverys() {
  const { showToast } = useStateContext();
  const [surveys, setSurveys] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false)
  console.log(surveys);

  const onDeleteClick = (id) => {
    if (window.confirm('Are you sure to delete this survey?')) {
      axiosClient.delete(`/survey/${id}`)
        .then(() => {
          showToast('The survey was deleted')
          getSurveys();
        })
    }
  }

  const onPageClick = (link) => {
    getSurveys(link.url)
  }

  const getSurveys = (url) => {

    url = url || '/survey'
    setLoading(true)

    axiosClient.get(url)
      .then(({ data }) => {
        setSurveys(data.data)
        setMeta(data.meta)
        setLoading(false)
      })
  }

  useEffect(() => {
    getSurveys();

  }, [])

  return (
    <PageComponent title="Surveys" buttons={(
      <TButton color="green" to="/surveys/create">
        <PlusCircleIcon className="h-6 w-6 mr-2" />
        Create new
      </TButton>
    )}>

      {loading && <div
        className=" h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>}

      {!loading && <div>
        {surveys.length === 0 && <div className="py-8 text-center text-gray-700"> You dont have any surveys </div>}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {surveys.map((survey) => (
            <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
          ))}
        </div>

        {surveys.length > 0 && <PaginationLinks meta={meta} onPageClick={onPageClick} /> }
      </div>
      }
    </PageComponent>



  )
}
