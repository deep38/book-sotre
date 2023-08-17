import React, {useContext,useEffect} from 'react'
import bookContext from '../Context/bookContext';
import { useNavigate } from 'react-router';
const About = () => {
    const {user} = useContext(bookContext);
    const navigate = useNavigate();
    useEffect(()=>{
      if(!user) {
        navigate('/login')
      }
    })
  return (
    <div>
      About
    </div>
  )
}

export default About
