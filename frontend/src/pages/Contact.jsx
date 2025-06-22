import React from "react"
import ImprovedFooter from "../components/common/ImprovedFooter"
import ContactDetails from "../components/core/ContactPage/ContactDetails"
import ContactForm from "../components/core/ContactPage/ContactForm"
import { Interactive3DCube } from "../components/Interactive3DCube";
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {/* 3D Cube Display */}
      <div className="fixed top-1/2 -right-[150px] transform -translate-y-1/2 z-[-1]">
        <Interactive3DCube size={400} intensity={0.3} />
      </div>

      <div className="mx-auto mt-10 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 theme-text-primary lg:flex-row" style={{ position: 'relative', zIndex: 2, background: 'transparent' }}>
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      {/* Spacing to replace removed reviews section */}
      <div className="my-20"></div>

      {/* Footer */}
      <footer className="contact-page-footer">
        <ImprovedFooter />
      </footer>
    </div>
  )
}

export default Contact
