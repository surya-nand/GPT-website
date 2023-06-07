import './App.css';

import { Navbar,Cta,Brand} from './components';
import { Blog, Header, WhatGPT3, Features, Possibility, Footer} from './containers';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
