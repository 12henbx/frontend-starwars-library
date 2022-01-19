import React from 'react'

function DropdownMenu({ data, selectedOption, valueSelect }) {
    // const [selectedOption, setSelectedOption] = useState();

    return (
        // <div class="drop-shadow-md mx-4 my-4">
        //     <div class="flex flex-row rounded-3xl align-center bg-white w-64 h-9">
                <div class="flex align-center mx-2">
                    <select onChange={ e => selectedOption(e.target.value)}
                    value={valueSelect}
                    id="optionSelect" 
                    name="optionSelect"  
                    class="border-none">
                        {data.map((eachOption, key) => {
                            let result = eachOption.replace( /([A-Z])/g, " $1" );
                            let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
                            return(
                                <option key={key} value={eachOption}>{finalResult}</option>
                            )
                        })}
                    </select>
                </div>
        //     </div>
        // </div>
    )
}
const MemoizedDropdownMenu = React.memo(DropdownMenu);
export default MemoizedDropdownMenu;