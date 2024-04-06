import { useEffect, useRef, useState } from "react";
import { SuccessAlert } from "../../SuccessAlert";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./Icons";
import "./styles.scss";
import { AnimatePresence, useAnimate, useInView, usePresence, motion } from "framer-motion";
const contacts = [
  { type: "Email", value: "rubajrafal04@gmail.com", icon: <MailIcon className="contact__item-icon" />, clipboard: "rubajrafal04@gmail.com" },
  { type: "Telefon", value: "+48 505 570 614", icon: <PhoneIcon className="contact__item-icon" />, clipboard: "+48505570614" },
  { type: "Linkedin", value: "Rafał Rubaj", icon: <LinkedinIcon className="contact__item-icon" />, url: "https://www.linkedin.com/in/rafa%C5%82-rubaj-6721402a9/" },
  { type: "GitHub", value: "ProfVHS", icon: <GithubIcon className="contact__item-icon" />, url: "https://github.com/ProfVHS" },
];

export const Contact = ({ contactRef }) => {
  const [showAlert, setShowAlert] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

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
      <div className="contact" ref={contactRef}>
        <span className="contact__title">
          <span className="contact__title-color">{"<h4>"}</span>
          <span>Kontakt</span>
          <span className="contact__title-color">{"</h4>"}</span>
        </span>
        <div className="contact__content" ref={ref}>
          {isInView
            ? contacts.map((contact, index) => (
                <ContactItem
                  key={index}
                  title={contact.type}
                  text={contact.value}
                  icon={contact.icon}
                  index={index}
                  onClick={contact.clipboard ? () => copyToClipboard(contact.clipboard) : () => openWebsite(contact.url)}
                />
              ))
            : null}
        </div>
      </div>
      <AnimatePresence>{showAlert && <SuccessAlert text="Skopiowano do schowka" />}</AnimatePresence>
    </>
  );
};

const ContactItem = ({ title, text, icon, onClick, index }) => {
  const [scope, animate] = useAnimate();
  const [isPersence, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPersence) {
      const enterAnimation = async () => {
        animate(".contact__item-title", { opacity: 0 }, { duration: 0 });
        animate(".contact__item-icon", { scale: 0 }, { duration: 0 });
        await animate(".contact__item-text", { opacity: 0 }, { duration: 0 });
        await animate(scope.current, { opacity: [0, 1], y: [200, 0] }, { duration: 0.6, type: "spring", delay: index * 0.1 });
        await animate(".contact__item-icon", { scale: [0, 1], rotate: [360, 0] }, { duration: 0.8, type: "spring" });
        animate(".contact__item-title", { opacity: [0, 1] }, { duration: 0.5 });
        await animate(".contact__item-text", { opacity: [0, 1] }, { duration: 0.5 });
      };
      enterAnimation();
    }
  }, [isPersence]);

  return (
    <div className="contact__item" onClick={onClick} ref={scope}>
      <span className="contact__item-circle">{icon}</span>
      <span className="contact__item-title">{title}</span>
      <span className="contact__item-text">{text}</span>
    </div>
  );
};
