import React from 'react'
import'./sidebar.css'
// import './sidebar.scss'



import cap from '../../Assets/cap.jpg'


// import react-icons
import {FiSettings} from 'react-icons/fi'
import {RxDashboard} from 'react-icons/rx'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {AiOutlineMacCommand} from 'react-icons/ai'
import {AiOutlineLogout} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {MdOutlineExplore} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={cap} alt="Name"/>
        <h2>EDVIRON</h2>
      </div>

      <div className="menuDiv">
        <h3 className='divTitle'>
          
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <RxDashboard className="icon"/>
             <span className='smallText'>
             Dashbord
             </span>
            </a> 
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <AiOutlineUserAdd className="icon"/>
             <span className='smallText'>
             Users
             </span>
            </a> 
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <AiOutlineProject className="icon"/>
             <span className='smallText'>
             Projects
             </span>
            </a> 
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <AiOutlineMacCommand className="icon"/>
             <span className='smallText'>
             Sales
             </span>
            </a> 
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <FiSettings className="icon"/>
             <span className='smallText'>
             Settings
             </span>
            </a> 
          </li>



          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <IoMdNotificationsOutline className="icon"/>
             <span className='smallText'>
             Notification
             </span>
            </a> 
          </li>



          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <MdOutlineExplore className="icon"/>
             <span className='smallText'>
             Explore
             </span>
            </a> 
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
             <AiOutlineLogout className="icon"/>
             <span className='smallText'>
             Logout
             </span>
            </a> 
          </li>


        </ul>
      </div>

    </div>
  )
}

export default Sidebar