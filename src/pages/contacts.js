import React from "react";
import GetInTouch from "../pageComponents/GetInTouch";
import Seo from "../components/Seo";

const ContactsPage = () => {
  return <GetInTouch />;
};

export default ContactsPage;

export const Head = () => <Seo title="Contact" pathname="/contacts/" description="Contact Vitor Dalbem Costa, a Software Developer based in Lisbon, Portugal." />;
