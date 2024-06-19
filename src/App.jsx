import './App.css'
import { AuthProvider } from './context/authContext';
import { FormAction } from './formAction';
import { FormState } from './formState';
import { FormStatus } from './formStatus';
import { Repos } from './repos';
import { User } from './user';

function App() {

  return (
    <>
      {/* <FormAction /> */}

      {/* <FormState /> */}

      {/* <FormStatus /> */}

      <AuthProvider>
        <User />
      </AuthProvider>

      <Repos />
    </>
  )
}

export default App
