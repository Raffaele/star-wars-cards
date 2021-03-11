import './App.scss';

import api from './engine/api/api';

api.getInfo().then(r => r.json())
    .then(x => console.log(x));

function App() {
    return (
        <div>
            <header>
            </header>
        </div>
    );
}

export default App;
