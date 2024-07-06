/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// eslint-disable-next-line no-unused-vars
import HelloAdmin from './components/HelloAdmin'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import PersonalDetails from './components/PersonalDetails'
import ContactInfo from './components/ContactInfo'
import ProfessionalInfo from './components/ProfessionalInfo'
import Banking from './components/Banking.jsx'
import Congrats from './components/Congrats.jsx'
// import DashboardTemp from './components/DashboardTemp.jsx'
import WelcomeDashboard from './components/WelcomeDashboard.jsx'
import CleaningRequest from './components/CleaningRequest.jsx'
import PendingRequest from './components/PendingRequest.jsx'
import PendingPop from './components/PendingPop.jsx'
import PendingPopAssign from './components/PendingPopAssign.jsx'
import SuccessJobAlert from './components/SuccessJobAlert.jsx'
import UpcomingSchedule from './components/UpcomingSchedule.jsx'
import RequestHistory from './components/RequestHistory.jsx'
import UserManagement from './components/UserManagement.jsx'
import CleanersAccount from './components/CleanersAccount.jsx'
import ScheduleOverview from './components/ScheduleOverview.jsx'
import FinancialManagement from './components/FinancialManagement.jsx'
import PaymentHistory from './components/PaymentHistory.jsx'
import Invoices from './components/Invoices.jsx'
import CustomerSupport from './components/CustomerSupport.jsx'
import ComplaintResolution from './components/ComplaintResolution.jsx'
import CustomDetails from './components/CustomDetails.jsx'
import AnalyticsAndInsights from './components/AnalyticsAndInsights.jsx'
import LogoutConfirmation from './components/LogoutConfirmation.jsx'
// import CleanersDbTemp from './components/CleanersDbTemp.jsx'
import CleanersHome from './components/CleanersHome.jsx'
import Reviews from './components/Reviews.jsx'
import ReviewPop from './components/ReviewPop.jsx'
import JobUpdates from './components/JobUpdates.jsx'
import JobUpdatePop from './components/JobUpdatePop.jsx'
import ReviewsAndRatings from './components/ReviewsAndRatings.jsx'
import TimeTracking from './components/TimeTracking.jsx'
import TimeStamps from './components/TimeStamps.jsx'
import LoginMain from './components/LoginMain.jsx'
import ServiceCategory from './components/ServiceCategory'
import Service from './components/Services'
import ServiceAdd from './components/ServiceAdd'
import ServiceUpdate from './components/ServiceUpdate'
import ServiceForm from './components/ServiceForm'
import NewService from './components/NewService'
import CleanerApplication from './components/CleanerApplication'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginMain />} />
        <Route path='/Signup' element={ <SignupPage/> } />
        {/* <Route path='/LoginPage' element={ <LoginPage/> } /> */}
        <Route path='/PersonalDetails' element={ <PersonalDetails/> } />
        <Route path='/ContactInfo' element={ <ContactInfo/> } />
        <Route path='/ProfessionalInfo' element={ <ProfessionalInfo/> } />
        <Route path='/Banking' element={ <Banking/> } />
        <Route path='/Congrats' element={ <Congrats/> } />
        <Route path='/WelcomeDashboard' element={ <WelcomeDashboard/> } />
        <Route path='/CleaningRequest' element={ <CleaningRequest/> } />
        <Route path='/PendingRequest' element={ <PendingRequest/> } />
        <Route path='/PendingPop' element={ <PendingPop/> } />
        <Route path='/PendingPopAssign' element={ <PendingPopAssign/> } />
        <Route path='/SuccessJobAlert' element={ <SuccessJobAlert/> } />
        <Route path='/UpcomingSchedule' element={ <UpcomingSchedule/> } />
        <Route path='/RequestHistory' element={ <RequestHistory/> } />
        <Route path='/UserManagement' element={ <UserManagement/> } />
        <Route path='/ServiceCategory' element={ <ServiceCategory/> } />
        <Route path='/ServiceCategoryUpdate' element={ <ServiceUpdate/> } />
        <Route path='/ServiceForm' element={ <ServiceForm/> } />
        <Route path='/CleanersAccount' element={ <CleanersAccount/> } />
        <Route path='/ScheduleOverview' element={ <ScheduleOverview/> } />
        <Route path='/FinancialManagement' element={ <FinancialManagement/> } />
        <Route path='/PaymentHistory' element={ <PaymentHistory/> } />
        <Route path='/Invoices' element={ <Invoices/> } />
        <Route path='/CustomerSupport' element={ <CustomerSupport/> } />
        <Route path='/ComplaintResolution' element={ <ComplaintResolution/> } />
        <Route path='/CustomDetails' element={ <CustomDetails/> } />
        <Route path='/AnalyticsAndInsights' element={ <AnalyticsAndInsights/> } />
        <Route path='/LogoutConfirmation' element={ <LogoutConfirmation/> } />
        <Route path='/JobUpdates' element={ <JobUpdates/> } />
        <Route path='/JobUpdatePop' element={ <JobUpdatePop/> } />
        <Route path='/OwnRating' element={ <ReviewsAndRatings/> } />
        <Route path='/TimeTracking' element={ <TimeTracking/> } />
        <Route path='/TimeStamps' element={ <TimeStamps/> } />
        <Route path='/LoginMain' element={ <LoginMain/> } />
        <Route path='/ReviewPop' element={ <ReviewPop/> } />
        <Route path='/CleanerApplication' element={ <CleanerApplication/> } />
        <Route path='/NewService' element={ <NewService/> } />
        <Route path='/Service' element={ <Service/> } />
        <Route path='/ServiceAdd' element={ <ServiceAdd/> } />
        

        <Route path='/CleanersHome' element={ <CleanersHome/> } />
        <Route path='/Reviews' element={ <Reviews/> } />
      </Routes>
    </BrowserRouter>
    {/* <HelloAdmin/> */}
    {/* <SignupPage/> */}
    {/* <PersonalDetails/> */}
    {/* <ContactInfo/> */}
    {/* <ProfessionalInfo/> */}
    {/* <Banking/> */}
    {/* <Congrats/> */}
    {/* <LoginPage/> */}
    {/* <DashboardTemp/> */}
    {/* <WelcomeDashboard/> */}
    {/* <CleaningRequest/> */}
    {/* <PendingRequest/> */}
    {/* <PendingPop/> */}
    {/* <PendingPopAssign/> */}
    {/* <SuccessJobAlert/> */}
    {/* <UpcomingSchedule/> */}
    {/* <RequestHistory/> */}
    {/* <RequestHistory/> */}
    </>
  )
}

export default App
