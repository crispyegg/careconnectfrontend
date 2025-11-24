

import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import AdminLogin from './Admin/AdminLogin'
import ResgistorUser from './Admin/RegistorUser'
import Treatments from './Innerpages/Treatments'
import BookAppointments from './Innerpages/BookAppointments'

import ViewTreatments from './Admin/ViewTreatments'
import AddLocation from './Admin/AddLocation'
import ViewLocations from './Admin/ViewLocations'
import BookTreatment from './Innerpages/BookTreatment'
import AdminDashBoard from './Admin/AdminDashBoard'
import AddTreatment from './Admin/AddTreatment'
import Home from './Innerpages/Home'
import ViewAppointments from './Admin/ViewAppointments'
import Offers from './Innerpages/Offers'
import AddDoctors from './Admin/AddDoctors'
import DoctorInfo from './Innerpages/DoctorInfo'
import ContactUs from './Innerpages/ContactUs'
import Blogs from './Innerpages/Blogs'
import AddBlogs from './Admin/Addblogs'
import ViewBlogs from './Admin/ViewBlogs'
import ManageContact from './Admin/ManageContact'
import QuickAppoint from './Innerpages/QuickAppoint'
import AddAssociateHospitals from './Admin/AddAssociateHospitals'
import Hospitals from './Innerpages/Hospitals'
import ForgotPassword from './Admin/ForgotPassword'
import Mangeoffers from './Admin/Mangeoffers'
import ResetPassword from './Admin/ResetPassword'
import ManageHospital from './Admin/ManageHospital'
import Nopage from './Innerpages/Nopage'


const Routing = () => {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/treatments' element={<Treatments/>}/>
        <Route path='/bookappointment' element={<BookAppointments/>}/>
        <Route path='/bookappointment/:tname/:location/:doctorName' element={<BookAppointments/>}/>

        <Route path='/booktreatment/:tid/:tname/' element={<BookTreatment/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>

        <Route path='/doctorinfo/:tname/:location' element={<DoctorInfo/>}/>
        <Route path='/quickappoint' element={<QuickAppoint/>}/>
        <Route path='/hospitals' element={<Hospitals/>}/>


        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/registeruser' element={<ResgistorUser/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>

        <Route path='/admindashboard' element={<AdminDashBoard/>}>
    
            <Route path='associatehospital' element={<AddAssociateHospitals/>}/> 
            <Route path='managehospitals' element={<ManageHospital/>}/> 

            <Route path='manageoffers' element={<Mangeoffers/>}/>  

            <Route path='addblogs' element={<AddBlogs/>}/>
            <Route path='viewblogs' element={<ViewBlogs/>}/>

            <Route path='adddoctors' element={<AddDoctors/>}/>  
            
            <Route path='managecontact' element={<ManageContact/>}/>

            <Route path='viewappointments' element={<ViewAppointments/>}/>

            <Route path='addtreatment' element={<AddTreatment/>}/>
            <Route path='viewtreatments' element={<ViewTreatments/>}/>

            <Route path='addlocation' element={<AddLocation/>}/>
            <Route path='viewlocations' element={<ViewLocations/>}/>

        </Route>

           <Route path="*" element={<Nopage/> } />
 
      </Routes>


    </>
  )
}

export default Routing