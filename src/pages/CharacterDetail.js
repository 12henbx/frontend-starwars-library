import React from 'react'
import { useParams } from 'react-router-dom';
import Description from '../components/Description';
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from '../apollo/queries';
import LoadingComponent from '../components/LoadingComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import PanelWhite from '../components/Panel';
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

function CharacterDetail() {
    // let location = useLocation();
    const locBreadcrumb = "Character"
    let param = useParams();
    const { data, loading, error } = useQuery(GET_CHARACTER, { variables: { idChar: param.idChar } });

    return (
        <div>
            {!loading ? (
                <div className="flex ml-4 mt-4">
                    <BreadcrumbComponent location={locBreadcrumb} name={data.person.name}/>
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
                            <Description data={data.person}/>
                        </ErrorBoundary>
                    ) : (
                        <LoadingComponent />
                    )}
                </div>
            </PanelWhite>
        </div>
    )
}

export default CharacterDetail;