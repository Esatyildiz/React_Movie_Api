
const searchIcon = ({ size }) => {
    return (
        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
            </path>
        </svg>
    )
}















const Icon = ({ name, size = 24, className }) => {

    const icons = {
        search: searchIcon,
    };


    const Component = icons[name]
    return <Component size={size} className={className} />;

}

export { Icon };