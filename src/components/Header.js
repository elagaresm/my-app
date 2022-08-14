const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <button className="btn">Add</button>
        </header>
    )
}



// CSS inside of React
// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'black'
// }

export default Header