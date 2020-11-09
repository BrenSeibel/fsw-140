import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import {faFilm} from '@fortawesome/free-solid-svg-icons'
import {faDev} from '@fortawesome/free-brands-svg-icons'

function footer() {
    return (
        <div className='footer'>
            <div className='footerContent'>
            {/* <h3>find more infromation at :</h3>
            <FontAwesomeIcon icon={faFilm} className='fa'/>
            <FontAwesomeIcon icon={faGithub} className='fa' />
            <FontAwesomeIcon icon={faFacebook} className='fa' />
            <FontAwesomeIcon icon={faInstagram} className='fa' /> */}

            <h4>Developed using :</h4>
            <FontAwesomeIcon icon={faReact} className='fa' />
            <FontAwesomeIcon icon={faDev} className='fa'/>
   
            <h5 className='collab'></h5>
            {/* <p>William Morris </p> */}
            <p><a href="index.html">Brenda Seibel</a></p>
            {/* <p>Caitlin Dooley</p> */}
        </div>
        </div>
    )
}

export default footer