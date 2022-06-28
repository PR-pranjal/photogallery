
import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

import Uploadform from './components/Uploadform';
import ImageGrid from './components/ImageGrid';


function App() {

  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="App">
     <Title />
     <Uploadform/>
     <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    
      

    </div>
  );
}

export default App;
