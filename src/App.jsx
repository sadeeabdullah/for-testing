
import './App.css'
import Card from './components/card'

function App() {

  return (
    < >
    <h1 className='text-4xl font-bold text-center'>welcome to my cards </h1>
      <div className='grid grid-cols-3 gap-4 mx-auto px-12 py-8'>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      
      </div>
      

     
    </>
  )
}

export default App
