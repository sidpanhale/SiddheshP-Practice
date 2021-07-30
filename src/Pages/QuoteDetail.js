import React, { useEffect } from "react";
import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Link, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from '../components/UI/LoadingSpinner'

// const DUMMY_DATA = [
//   { id: "q1", author: "abc", text: "abc" },
//   { id: "q2", author: "def", text: "def" },
// ];

export default function QuoteDetail(props) {
  const match = useRouteMatch();
  const params = useParams();

  const {quoteId} = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if(status === 'pending'){
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if(error){
    return <p>{error}</p>
  }


  console.log(
    `useRouteMatch().path :: ${match.path} useParams().quoteId :: ${params.quoteId} useRouteMatch().url : ${match.url}`
  );

 // const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!loadedQuote) {
    return <p>NO QUOTE FOUND</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
