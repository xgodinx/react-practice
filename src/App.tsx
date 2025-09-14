import { useState } from 'react';
import './App.scss';

import NavButtons from './components/NavigationSection/NavButtons';
import ToDo from './components/ToDo/ToDo';
import UserForm from './components/UserForm/UserForm';
import Counter from './components/Counter/Counter';

import Header from './components/Trio/Header';
import Main from './components/Trio/Main';
import Footer from './components/Trio/Footer';

function App() {
  const [page, setPage] = useState('');
  return (
    <>
      <Header />
      <NavButtons active={page} click={(current: any) => setPage(current)} />

      {page === 'projects' && (
        <>
          <UserForm />
          <Counter />
          <ToDo />
        </>
      )}
      {page === 'landing' && (
        <>
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
