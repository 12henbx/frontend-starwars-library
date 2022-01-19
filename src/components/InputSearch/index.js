import searchIcon from '../../assets/svg/search-icon.svg';

function InputSearch({ filterList, valueInput }) {
    return (
        <div class="drop-shadow-md mx-4 my-4">
            <div class="flex flex-row rounded-3xl align-center bg-white w-64 h-9">
                <div class="flex align-center justify-center mr-2 pl-4">
                    <img alt="search icon" src={searchIcon} />
                </div>
                <div class="flex align-center">
                    <input type="text" 
                    id="search" 
                    name="search" 
                    placeholder="Search" 
                    class="border-none"
                    value={valueInput}
                    onChange={ e => filterList(e.target.value) }/>
                </div>
            </div>
        </div>
    )
}

export default InputSearch