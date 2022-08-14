import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('this is working')
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

export default Header
