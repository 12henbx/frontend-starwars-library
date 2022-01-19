import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
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

function BreadcrumbComponent({ location, name}) {

    return(
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
            // reset the state of your app so the error doesn't happen again
            }}
        >
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='./'>{location}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>{name}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        </ErrorBoundary>
    )
}

export default BreadcrumbComponent