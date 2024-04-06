import { useEffect, useState } from "react";
import { SuccessAlert } from "../../SuccessAlert";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./Icons";
import "./styles.scss";
import { AnimatePresence } from "framer-motion";
const contacts = [
  { type: "Email", value: "rubajrafal04@gmail.com", icon: <MailIcon className="contact__item-icon" />, clipboard: "rubajrafal04@gmail.com" },
  { type: "Telefon", value: "+48 505 570 614", icon: <PhoneIcon className="contact__item-icon" />, clipboard: "+48505570614" },
  { type: "Linkedin", value: "Rafał Rubaj", icon: <LinkedinIcon className="contact__item-icon" />, url: "https://www.linkedin.com/in/rafa%C5%82-rubaj-6721402a9/" },
  { type: "GitHub", value: "ProfVHS", icon: <GithubIcon className="contact__item-icon" />, url: "https://github.com/ProfVHS" },
];

export const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    handleAlert();
  };

  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      <div className="contact">
        <span className="contact__title">
          <span className="contact__title-color">{"<h4>"}</span>
          <span>Kontakt</span>
          <span className="contact__title-color">{"</h4>"}</span>
        </span>
        <div className="contact__content">
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              title={contact.type}
              text={contact.value}
              icon={contact.icon}
              onClick={contact.clipboard ? () => copyToClipboard(contact.clipboard) : () => openWebsite(contact.url)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>{showAlert && <SuccessAlert text="Skopiowano do schowka" />}</AnimatePresence>
    </>
  );
};

const ContactItem = ({ title, text, icon, onClick }) => {
  return (
    <div className="contact__item" onClick={onClick}>
      <span className="contact__item-circle">{icon}</span>
      <span className="contact__item-title">{title}</span>
      <span className="contact__item-text">{text}</span>
    </div>
  );
};
