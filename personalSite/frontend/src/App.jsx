import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProjectCreate from "./components/molecules/ProjectCreate";
import { useState } from "react";
import Modal from "./components/Modal";
import ProjectList from "./components/molecules/ProjectList";


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const cere = () => {
    console.log('iata clickul')
    // fetch('http://localhost:8080/api/posts', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({name: 'kyle'})
    // }).then(r => r.json()).then(r => console.log(r))

    fetch('http://localhost:8080/api')
      .then(r => r.json())
      .then(r => console.log(r))
  }

  const postare = () => {
    console.log('iata clickul')
    fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    })
  }

  return (
    <>
    
      <Header />
      <main>
        <button onClick={postare}>posteaza</button>
        <button onClick={cere}>cere</button>
        <Button text={'my button'} />
        <ProjectList />
        
        <div>
            <button onClick={openModal}>Open Submit Project</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ProjectCreate />
            </Modal>
        </div>
        <footer>Footer</footer>
      </main>
    </>
  )
}

export default App;
