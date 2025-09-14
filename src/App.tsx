import { useState } from 'react';
import './App.scss';

import NavButtons from './components/NavigationSection/NavButtons';
import ToDo from './components/ToDo/ToDo';
import UserForm from './components/UserForm/UserForm';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import Toggle from './components/Toggle/Toggle';
import UserCard from './components/UserCard/UserCard';

import Header from './components/Trio/Header/Header';
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
          <UserCard user={{ name: 'Dima', age: 25, isOnline: true }} />
          <Toggle />
          <Counter />
          <ToDo />
          <Form />
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
