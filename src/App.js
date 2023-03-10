
import { RouterProvider } from 'react-router-dom';
import ParticlesBackground from './Components/ParticlesBackground';
import Router from './Routers/Router';

function App() {
  return (
   
   <div>
     <ParticlesBackground/>
     <div className='max-w-[1440px] mx-auto'>
     <RouterProvider router={Router}>
      
     </RouterProvider>
     </div>

    </div>
    
 
  );
}

export default App;
