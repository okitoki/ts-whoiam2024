import React from 'react';
import CoverPage from './componunt/cover';
import { Route, Routes } from 'react-router-dom';
import CheckList from './componunt/checklist';
import ResultPage from './componunt/result';





const App: React.FC = () => {



       
  return (
       
       <Routes>
                <Route path="/" element={<CoverPage />}  />
                <Route path="/page1" element={<CheckList />}  />
                <Route path="/result" element={<ResultPage />}  />
       </Routes>

  );
}

export default App;
