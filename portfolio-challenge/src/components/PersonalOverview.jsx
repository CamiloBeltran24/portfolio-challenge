import React from 'react'
import { Title } from './Title'
import { ProfilePicture } from './ProfilePicture'
import { Anchor } from './Anchor'
import { ContactAnchors } from './ContactAnchors';
import  mailIcon from '../assets/svg/mail.svg';
import  callIcon from '../assets/svg/call.svg'

export const PersonalOverview = ({ image, name }) => {
  return (
    <section className="personal-overview">
      <div className="flex-layout">

        <ProfilePicture/>

        <div className="text">

          <div className="name">
            <Title text='Christian Camilo Beltrán'/>
          </div>

            <ContactAnchors>
              <Anchor href="mailto:cambelf.dev@gmail.com" label="cambelf.dev@gmail.com" icon={ mailIcon }/>
              <Anchor href="tel:+573175891597" label="(+57) 317 589 1597" icon={ callIcon }/>
            </ContactAnchors>


          <div className="description">
            <p>Self-motivated developer, Javascript passionate.</p>
            <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
