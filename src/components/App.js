import Navbar  from "./admin/Navbar/navbar";
import HeaderComponent from './admin/Nav_item/headersComponents/HeadersComponent'
import AboutUs from './admin/Nav_item/BodyComponents/About'
import Contact  from './admin/Nav_item/BodyComponents/Contact'
import {Routes, Route } from 'react-router-dom'
import Login from "./login/login"
import SignInSide from "./Form/pages/Signin"
import BasicTabstable from "./Form/candidate/BasicTabstable"
import Dashboard from "./admin/Dashboard/Dashboard";
import Navtab from './Form/tabs/Navtab';
import View from "./Form/view/view";
import Protfolio from "./admin/Nav_item/BodyComponents/Portfolio"
//import Footer from "./admin/Nav_item/BodyComponents/Footer"
function App() {
	
	return (
		<>
			
				<Routes>
					<Route path='/home'  element={<Dashboard />} />
					<Route path='/homepage'  element={<HeaderComponent/>} />
					<Route path="/About" element={<AboutUs />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/table" element={<BasicTabstable />} />
					<Route path='/navtab' element={<Navtab />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<SignInSide />} />
					<Route path="/view" element={<View />} />
					<Route path="/portfolio" element={<Protfolio/>} />

				</Routes>
			
		</>
        )
	}


export default App;
