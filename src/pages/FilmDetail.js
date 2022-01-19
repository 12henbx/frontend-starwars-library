import React from 'react'
import { useParams } from 'react-router-dom';
import Description from '../components/Description';
import { useQuery } from "@apollo/client";
import { GET_FILM } from '../apollo/queries';
import LoadingComponent from '../components/LoadingComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import PanelWhite from '../components/Panel';
import Characters from './Characters';
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function FilmDetail() {
    // let location = useLocation();
    const locBreadcrumb = "Films"
    let param = useParams();
    const { data, loading, error } = useQuery(GET_FILM, { variables: { idFilm: param.idFilm } });

    return (
        <div>
            {!loading ? (
                <div className="flex ml-4 mt-4">
                    <BreadcrumbComponent location={locBreadcrumb} name={data.film.title}/>
                </div>
            ) : (
                <LoadingComponent />
            )}
            <PanelWhite>
                <div>
                {error ? (
                    <div role="alert">
                        <p>Something went wrong:</p>
                        <pre>{error.message}</pre>
                    </div>
                ) : !loading ? (
                    <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onReset={() => {
                        }}
                    >
                        <Description data={data.film}/>
                    </ErrorBoundary>
                ) : (
                    <LoadingComponent />
                )}
                </div>
            </PanelWhite>
            {error ? (
                <div role="alert">
                    <p>Something went wrong:</p>
                    <pre>{error.message}</pre>
                </div>
            ) : loading ? (
                <LoadingComponent />
            ): (
                <Characters dataCharacters={data.film.characterConnection.characters}/>
            )}
        </div>
    )
}

export default FilmDetail;