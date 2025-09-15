import { useState } from 'react';
import './App.scss';

import NavButtons from './components/Base/NavigationSection/NavButtons';
import ToDo from './components/Tasks/ToDo/ToDo';
import UserForm from './components/Tasks/UserForm/UserForm';
import Counter from './components/Tasks/Counter/Counter';
import Form from './components/Tasks/Form/Form';
import Toggle from './components/Tasks/Toggle/Toggle';
import Timer from './components/Tasks/Timer/Timer';
import Joke from './components/Tasks/Joke/Joke';

import Header from './components/Trio/Header/Header';
import Main from './components/Trio/Main';
import Footer from './components/Trio/Footer';

import EffectSection from './components/Base/EffectSection/EffectSection';

function App() {
  const [page, setPage] = useState('');
  return (
    <>
      <Header />
      <NavButtons active={page} click={(current: any) => setPage(current)} />

      {page === 'projects' && (
        <>
          <UserForm />
          <Joke />
          <Timer />
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
      {page === 'effect' && (
        <>
          <EffectSection />
        </>
      )}
    </>
  );
}

export default App;
