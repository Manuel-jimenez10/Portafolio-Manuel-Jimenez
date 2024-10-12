import './App.css'
import CoverParticles from './CoverParticles'

function App() {
  return (
    <div className='h-screen flex items-center bg-slate-900 bg-cover'>
      <CoverParticles/>
    <header className='top-0 fixed w-full'>
  <nav>
    <ul className="w-80 flex flex-row-reverse mx-auto bg-gray-200 justify-around">
      <li><a href="#home">Inicio</a></li>
      <li><a href="#about">Acerca de</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
</header>
<section>
  <div className='grid ml-10 font-extralight text-2xl mr-10 text-white'>
<h1>Hey, Soy Manuel Jimenez</h1>
<p>Desarrollador full stack, especializado en BackEnd. Resido en el Zulia, Venezuela. Especializado en crear soluciones innovadoras.</p>
  </div>
  <div className='flex justify-around mx-48 mt-8 text-white'>
  <a className='bg-slate-600 p-2 rounded-lg' href="https://www.linkedin.com/in/manuel-jimenez-a86504217/">LinkedIn</a>
  <a className='bg-slate-600 p-2 rounded-lg' href="">Github</a>
  <a className='bg-slate-600 p-2 rounded-lg' href="">manuel28042005@gmail.com</a>
  </div>
  </section>
  </div>
  )
}

export default App
