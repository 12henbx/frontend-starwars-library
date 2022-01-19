import React from 'react'
import Description from '../components/Description';
import LoadingComponent from '../components/LoadingComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';

function ListItem() {

    return (
        <div className=" px-4 my-20 h-fit bg-zinc-50 rounded-3xl bg-white">
            <BreadcrumbComponent param={param}/>
            <div>
                {!loading ? (
                    <Description data={data}/>
                ) : (
                    <LoadingComponent />
                )}
                
            </div>
        </div>
    )
}

export default ListItem;