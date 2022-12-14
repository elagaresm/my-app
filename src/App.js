import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

    return (
        <div className="container">
            <Header title="Task Tracker" />
            <Tasks />
        </div>
    )
}

export default App
