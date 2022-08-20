import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import ContactHeader from "../components/contact/contact-header";
import ContactInfo from "../components/contact/contact-info";

function contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
      </Head>
      <ContactHeader />
      <div className="container bg-white pt-5">
        <ContactInfo />
        <ContactForm />
      </div>
    </Fragment>
  );
}

export default contact;
