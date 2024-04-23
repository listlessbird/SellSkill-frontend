// App.tsx
import './App.css'


import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistore } from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import ProtectedRoute and PublicRoute
import { AdminProtectedRoute, AdminPublicRoute, RecruiterProtectedRoute, ApplicantProtectedRoute, PublicRoute, ProtectedRoute } from './utils/protected';

// // pages

import RecruiterHome from './components/recruiter/home/Content'
import RecruiterCareerDash from './components/recruiter/career/dash/Content'
import RecruiterCareerCreate from './components/recruiter/career/create/Content'
import RecruiterCareerDetails from './components/recruiter/career/details/Content'

import ApplicantHome from './components/applicant/home/Content'

import SignupForm from './components/register/authSignup'
import LoginForm from './components/register/authLogin'

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <BrowserRouter>
            <ToastContainer />
              <Routes>
                  {/* <Route path='/admin/login' element={<AdminPublicRoute><AdminLoginForm /></AdminPublicRoute>} />
                  <Route path='/admin/home' element={<AdminProtectedRoute><AdminHome /></AdminProtectedRoute>} /> */}

                  <Route path='/signup' element={<PublicRoute><SignupForm /></PublicRoute>} />
                  <Route path='/login' element={<PublicRoute><LoginForm /></PublicRoute>} />
                  
                  <Route path='/recruiter/home' element={<RecruiterProtectedRoute><RecruiterHome /></RecruiterProtectedRoute>} />
                  <Route path='/recruiter/career' element={<RecruiterProtectedRoute><RecruiterCareerDash /></RecruiterProtectedRoute>} />
                  <Route path='/recruiter/career/create' element={<RecruiterProtectedRoute><RecruiterCareerCreate /></RecruiterProtectedRoute>} />
                  <Route path='/recruiter/career/details' element={<RecruiterProtectedRoute><RecruiterCareerDetails /></RecruiterProtectedRoute>} />

                  <Route path='/applicant/home' element={<ApplicantProtectedRoute><ApplicantHome /></ApplicantProtectedRoute>} />
                  
                  <Route path="*" element={<div>404 not found</div>} />
              </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
