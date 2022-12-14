import './App.css';
import { AppUI } from './Appui/AppUi';
import { TodoProvider } from './context';

function App() {
  return (
    <TodoProvider >
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
