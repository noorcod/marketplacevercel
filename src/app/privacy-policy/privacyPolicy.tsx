"use client";
// import Link from "next/link";
import styles from "../../styles/PrivacyPolicy.module.css";
import { useNavigationEvent } from "../hooks/useNavigationEvent";
import Breadcrumbs from "../../components/Breadcrumb";
import DeactivateModal from "../../components/DeactivateModal";
import { useState } from "react";
import { useUserStore } from "../../store/User";
import SignInModal from "../../components/SignInModal";

const PrivacyPolicy = () => {
  useNavigationEvent();
  const { user, token } = useUserStore((state: any) => state);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const handleDeactivateModalOpen = () => {
    setShowDeactivateModal(true);
  };
  const handleModalClose = () => {
    setShowDeactivateModal(false);
  };
  const handleSignInModalOpen = () => {
    setShowSignInModal(true);
  };

  return (
    <>
      <main className="main mt-3">
        <Breadcrumbs />
        <div className={styles.main}>
          <div className={`p-2 ${styles.WordSection1}`}>
            <p
              className="MsoNormal"
              style={{
                marginTop: "13.5pt",
                marginRight: "0cm",
                marginBottom: "13.5pt",
                marginLeft: "0cm",
                lineHeight: "150%",
              }}
            >
              <b>
                <span
                  lang="en-PK"
                  style={{
                    fontSize: "14.5pt",
                    lineHeight: "150%",
                    fontFamily: '"Arial",sans-serif',
                    color: "black",
                  }}
                >
                  Privacy and Confidentiality
                </span>
              </b>
            </p>
            <p
              className={`${styles.MsoNormal}`}
              style={{
                marginTop: "9.0pt",
                marginRight: "0cm",
                marginBottom: "9.0pt",
                marginLeft: "0cm",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Welcome to the techbazaar.pk website (the "Site") operated by
                Tech Market (SMC-PRIVATE) LIMITED (Registration Number:
                0207336). We respect your privacy and want to protect your
                personal information. To learn more, please read this Privacy
                Policy.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpFirst}`}
              style={{
                marginTop: "0cm",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                This Privacy Policy explains how we collect, use and (under
                certain conditions) disclose your personal information. This
                Privacy Policy also explains the steps we have taken to secure
                your personal information. Lastly, this Privacy Policy explains
                your options regarding the collection, use and disclosure of
                your personal information. By visiting the Site directly or
                through another site, you accept the practices described in this
                Policy.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Data protection is a matter of trust, and your privacy is
                important to us. We shall therefore only use your name and other
                information which relates to you in the manner set out in this
                Privacy Policy. We will only collect information where it is
                necessary for us to do so and we will only collect information
                if it is relevant to our dealings with you.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We will only keep your information for as long as we are either
                required to by law or as is relevant for the purposes for which
                it was collected.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We will cease to retain your personal data or remove the means
                by which the data can be associated with you, as soon as it is
                reasonable to assume that such retention no longer serves the
                purposes for which the personal data was collected, and is no
                longer necessary for any legal or business purpose.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                You can visit the Site and browse without having to provide
                personal details. During your visit to the Site, you remain
                anonymous and at no time can we identify you unless you have an
                account on the Site and log on with your username and password.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Data that we collect.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may collect various pieces of information if you seek to
                reserve a product with on the Site.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We collect, store and process your data for processing your
                reservations and interactions with different sellers on the Site
                and any possible later claims, and to provide you with our
                services. We may collect personal information including, but not
                limited to, your title, name, gender, date of birth, email
                address, postal address, mobile number.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                TechBazaar shall collect the following information where you are
                a customer:
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Identity data, such as your name, gender, profile picture, and
                date of birth.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Contact data, such as address/location, email address and phone
                numbers.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Interaction records/data, such as details about reservations,
                searches, and favorites, user clicks, and other details of
                products and Services related to you
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Technical data, such as Internet protocol (IP) address, your
                login data, browser type and version, time zone setting and
                location, device information, browser plug-in types and
                versions, operating system and platform, international mobile
                equipment identity, device identifier, IMEI, MAC address,
                cookies (where applicable) and other information and technology
                on the devices you use to access the Site.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Profile data, such as your username and password, account
                settings, reservations related to you, user research, your
                interests, preferences, feedback and survey responses.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Usage data, such as information on how you use the Site,
                products and Services or view any content on the Site, including
                the time spent on the Site, items and data searched for on the
                Site, access times and dates, as well as websites you were
                visiting before you came to the Site and other similar
                statistics;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.7.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Marketing and communications data, such as your preferences in
                receiving marketing from us and our third parties, your
                communication preferences and your chat, email or call history
                on the Site or with third party customer service providers; and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.1.8.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Additional information, we may request you to submit for due
                diligence checks or required by relevant authorities as required
                for identity verification (such as copies of government issued
                identification, e.g. passport, ID cards, etc.) or if we believe
                you are violating our Privacy Policy or our Customer Terms and
                Conditions.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                TechBazaar shall collect the following information where you are
                a seller:
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Identity and contact data, such as your name, date of birth or
                incorporation, company name, address, email address, phone
                number and other business-related information (e.g. company
                registration number, business licence, tax information,
                shareholder and director information, etc.);
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Account data, such as bank account details, bank statements,
                credit card details and payment details (such account data may
                also be collected directly by our affiliates and/or third party
                payment service providers);
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Transaction data, such as details about orders and payments, and
                other details of products and Services related to you;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Technical data, such as Internet protocol (IP) address, your
                login data, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform, international mobile equipment identity, device
                identifier, IMEI, MAC address, cookies (where applicable) and
                other information and technology on the devices you use to
                access the Site;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Profile data, such as your username and password, orders related
                to you, your interests, preferences, feedback and survey
                responses;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Usage data, such as information on how you use the Site,
                products and Services or view any content on the Site, including
                the time spent on the Site, items and data searched for on the
                Site, access times and dates, as well as websites you were
                visiting before you came to the Site and other similar
                statistics;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.7.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Location data, such as when you capture and share your location
                with us in the form of photographs or videos and upload such
                content to the Site;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.8.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Marketing and communications data, such as your preferences in
                receiving marketing from us and our third parties and your
                communication preferences and your chat, email or call history
                on the Site or with our third party seller service providers;
                and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.2.2.9.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Additional information we may request you to submit for
                authentication (such as copies of government issued
                identification, e.g. passport, ID cards, etc.) or if we believe
                you are violating our Privacy Policy or our Terms of Use.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We will use the information you provide to enable us to process
                your reservations/orders and to provide you with the services
                and information offered through our website and which you
                request in the following ways:
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                If you are a buyer:
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Processing your reservations/orders for products:
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Providing services
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.2.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Facilitate your use of the services or access to the Site
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.2.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Administer your account with us
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.2.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Display your name, username or profile on the Site (including on
                any reviews you may post);
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.2.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Respond to your queries, feedback, claims or disputes, whether
                directly or through our third party service providers; and
                Display on scoreboards on the Site in relation to campaigns,
                mobile games or any other activity;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Marketing and advertising
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.3.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Provide you with information we think you may find useful or
                which you have requested from us (provided you have opted to
                receive such information);
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.3.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Send you marketing or promotional information about products and
                services on the Site from time to time (provided you have opted
                to receive such information); and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.3.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Help us conduct marketing and advertising
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Legal and operational purposes
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Ascertain your identity in connection with fraud detection
                purposes
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Compare information, and verify with third parties in order to
                ensure that the information is accurate
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Process any complaints, feedback, enforcement action you may
                have lodged with us;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Produce statistics and research for internal and statutory
                reporting and/or record-keeping requirements;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Store, host, back up your personal data;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Prevent or investigate any actual or suspected violations of our
                Terms of Use, Privacy Policy, fraud, unlawful activity, omission
                or misconduct, whether relating to your use of Site or any other
                matter arising from your relationship with us;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.7.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Perform due diligence checks;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.8.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Comply with legal and regulatory requirements (including, where
                applicable, the display of your name, contact details and
                company details), including any law enforcement requests, in
                connection with any legal proceedings, or otherwise deemed
                necessary by us; and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.4.9.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Where necessary to prevent a threat to life, health or safety.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Analytics, research, business and development
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.5.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Understand your user experience on the Site
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.5.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Improve the layout or content of the pages of the Site and
                customize them for users
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.5.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Identify visitors on the Site
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.5.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Conduct surveys, including carrying out research on our users'
                demographics and behavior
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.5.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Derive further attributes relating to you based on personal data
                provided by you (whether to us or third parties), in order to
                provide you with more targeted and/or relevant information
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.5.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Conduct data analysis, testing and research, monitoring and
                analyzing usage and activity trends
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.5.7.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Further develop our products and services; and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Other
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.6.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Any other purpose to which your consent has been obtained; and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.1.6.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Conduct automated decision-making processes in accordance with
                any of the above purposes.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                If you are a seller
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Providing Services
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.1.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To facilitate your use of the site
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.1.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To respond to your queries, feedback, claims or disputes,
                whether directly or through our third-party service agents;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.1.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To verify your documentation submitted to us facilitate your
                onboarding with us as a seller on the Site, including the
                testing of technologies to enable faster and more efficient
                onboarding.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.1.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To administer your account (if any) with us;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.1.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To display your name, username or profile on the Site;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.1.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To verify and carry out financial transactions (including any
                credit card payments, bank transfers, offline payments,
                remittances, or e-wallet transactions) in relation to payments
                related to you and/or Services used by you. In order to verify
                and carry out such payment transactions, payment information,
                which may include personal data, will be transferred to third
                parties such as our payment service providers;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Marketing and advertising
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.2.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To send you marketing or promotional materials about our or
                third-party sellers' products and services on our Site from time
                to time (provided you have opted to receive such information);
                and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.2.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To help us conduct marketing and advertising.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Legal and operational purposes
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To produce statistics and research for internal and statutory
                reporting and/or record-keeping requirements;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To store, host, back up your personal data;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To prevent or investigate any actual or suspected violations of
                our Terms of Use, Privacy Policy, fraud, unlawful activity,
                omission or misconduct, whether relating to your use of our
                Services or any other matter arising from your relationship with
                us;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To comply with legal and regulatory requirements (including,
                where applicable, the display of your name, contact details and
                company details), including any law enforcement requests, in
                connection with any legal proceedings or otherwise deemed
                necessary by us;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Where necessary to prevent a threat to life, health or safety;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To process any complaints, feedback, enforcement action and
                take-down requests in relation to any content you have uploaded
                to the Site;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.7.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To compare information, and verify with third parties in order
                to ensure that the information is accurate;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.8.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To ascertain your identity in connection with fraud detection
                purposes; and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.3.9.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To facilitate the takedown of prohibited and controlled items
                from our Site.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Analytics, research, business and development
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To audit the downloading of data from the Site;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To understand the user experience with the Services and the
                Site;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To improve the layout or content of the pages of the Site and
                customise them for users;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To conduct surveys, including carrying out research on our
                users' demographics and behaviour to improve our current
                technology (e.g. voice recognition tech, etc) via machine
                learning or other means;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To derive further attributes relating to you based on personal
                data provided by you (whether to us or third parties), in order
                to provide you with more targeted and/or relevant information;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To conduct data analysis, testing and research, monitoring and
                analysing usage and activity trends;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.7.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To further develop our products and services; and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.4.8.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To know our sellers better.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "86.4pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-32.4pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Other
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.5.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Any other purpose to which your consent has been obtained; and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "111.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-39.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.2.5.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                To conduct automated decision-making processes in accordance
                with any of these purposes.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Further, we will use the information you provide to administer
                your account with us; verify and carry out financial
                transactions in relation to payments you make; audit the
                downloading of data from our website; improve the layout and/or
                content of the pages of our website and customize them for
                users; identify visitors on our website; carry out research on
                our users' demographics; send you information we think you may
                find useful or which you have requested from us, including
                information about our products and services, provided you have
                indicated that you have not objected to being contacted for
                these purposes.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Subject to obtaining your consent we may contact you by email
                with details of other products and services. You may unsubscribe
                from receiving marketing information at any time in our mobile
                application settings or by using the unsubscribe function within
                the electronic marketing material. We may use your contact
                information to send newsletters from us and from our related
                companies. If you prefer not to receive any marketing
                communications from us, you can opt out at any time.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                6.3.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Your actual reservation details may be stored with us but for
                security reasons cannot be retrieved directly by us. However,
                you may access this information by logging into your account on
                the Site. Here you can view the details of your reservations
                that have been fulfilled, those which are pending. You undertake
                to treat the personal access data confidentially and not make it
                available to unauthorized third parties. We cannot assume any
                liability for misuse of passwords unless this misuse is our
                fault.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                7.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Other uses of your Personal Information
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                7.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may use your personal information for opinion and market
                research. Your details are anonymous and will only be used for
                statistical purposes. You can choose to opt out of this at any
                time. Any answers to surveys or opinion polls we may ask you to
                complete will not be forwarded on to third parties. Disclosing
                your email address is only necessary if you would like to take
                part in competitions. We save the answers to our surveys
                separately from your email address.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                7.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may also send you other information about us, the Site, our
                other websites, our products, sales promotions, our newsletters,
                anything relating to other companies in our group or our
                business partners. If you would prefer not to receive any of
                this additional information as detailed in this paragraph (or
                any part of it) please click the 'unsubscribe' link in any email
                that we send to you. Within 7 working days (days which are
                neither (i) a Sunday, nor (ii) a public holiday anywhere in
                Pakistan) of receipt of your instruction we will cease to send
                you information as requested. If your instruction is unclear we
                will contact you for clarification.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                7.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may further anonymize data about users of the Site generally
                and use it for various purposes, including ascertaining the
                general location of the users and usage of certain aspects of
                the Site or a link contained in an email to those registered to
                receive them, and supplying that anonymized data to third
                parties such as publishers. However, that anonymized data will
                not be capable of identifying you personally.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                8.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Competitions
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                8.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                For any competition we use the data to notify winners and
                advertise our offers. You can find more details where applicable
                in our participation terms for the respective competition.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Third Parties and Links
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may pass your details to other companies in our group. We may
                also pass your details to our agents and subcontractors to help
                us with any of our uses of your data set out in our Privacy
                Policy.{" "}
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may share (or permit the sharing of) your personal data with
                and/or transfer your personal data to third parties and/or our
                affiliates for the above-mentioned purposes. These third parties
                and affiliates, which may be located inside or outside your
                jurisdiction, include but are not limited to:
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.2.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Service providers (such as vendors, and partners) in areas such
                as services, marketing, data analytics, market or consumer
                research, survey, social media, customer service, installation
                services, information technology and website hosting;
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.2.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Their service providers and related companies; and
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "61.2pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-25.2pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.2.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Other users of the Site.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may transfer our databases containing your personal
                information if we sell our business or part of it, provided that
                we satisfy the requirements of applicable data protection law
                when disclosing your personal data. Other than as set out in
                this Privacy Policy, we shall NOT sell or disclose your personal
                data to third parties without obtaining your prior consent
                unless this is necessary for the purposes set out in this
                Privacy Policy or unless we are required to do so by law. The
                Site may contain advertising of third parties and links to other
                sites or frames of other sites. Please be aware that we are not
                responsible for the privacy practices or content of those third
                parties or other sites, nor for any third party to whom we
                transfer your data in accordance with our Privacy Policy. You
                are advised to check on the applicable privacy policies of those
                websites to determine how they will handle any information they
                collect from you.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.4.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                In disclosing your personal data to third parties, we endeavor
                to ensure that the third parties and our affiliates keep your
                personal data secure from unauthorized access, collection, use,
                disclosure, processing or similar risks and retain your personal
                data only for as long as your personal data helps with any of
                the uses of your data as set out in our Privacy Policy.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.5.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may transfer or permit the transfer of your personal data
                outside of Pakistan for any of the purposes set out in this
                Privacy Policy. However, we will not transfer or permit any of
                your personal data to be transferred outside of Pakistan unless
                the transfer is in compliance with applicable laws and this
                Privacy Policy.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                9.6.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;{" "}
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We may share your personal data with our third party service
                providers or affiliates (e.g. payment service providers) in
                order for them to offer services to you other than those related
                to your use of the Site. Your acceptance and use of the third
                party service provider's or our affiliate's services shall be
                subject to terms and conditions as may be agreed between you and
                the third party service provider or our affiliate. Upon your
                acceptance of the third party service provider's or our
                affiliate's service offering, the collection, use, disclosure,
                storage, transfer and processing of your data (including your
                personal data and any data disclosed by us to such third party
                service provider or affiliate) shall be subject to the
                applicable privacy policy of the third party service provider or
                our affiliate, which shall be the data controller of such data.
                You agree that any queries or complaints relating to your
                acceptance or use of the third party service provider's or our
                affiliate's services shall be directed to the party named in the
                applicable privacy policy.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                10.
                <span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp; </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Cookies
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                10.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We or our authorised service providers may use cookies, web
                beacons, and other similar technologies in connection with your
                use of the Site.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                10.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                The acceptance of cookies is not a requirement for visiting the
                Site. However, we would like to point out that the use of the
                'basket' functionality on the Site and ordering is only possible
                with the activation of cookies. Cookies are small text files
                (typically made up of letters and numbers) placed in the memory
                of your browser or device when you visit a website or view a
                message. They allow us to recognise a particular device or
                browser. Web beacons are small graphic images that may be
                included on the Site. They allow us to count users who have
                viewed these pages so that we can better understand your
                preference and interests. Cookies are tiny text files which
                identify your computer to our server as a unique user when you
                visit certain pages on the Site and they are stored by your
                Internet browser on your computer's hard drive. Cookies can be
                used to recognize your Internet Protocol address, saving you
                time while you are on, or want to enter, the Site. We only use
                cookies for your convenience in using the Site (for example to
                remember who you are when you want to amend your shopping cart
                without having to re-enter your email address) and not for
                obtaining or using any other information about you (for example
                targeted advertising). However, certain cookies are required to
                enable core functionality (such as adding items to your shopping
                basket), so please note that changing and deleting cookies may
                affect the functionality available on the Sit. Your browser can
                be set to not accept cookies, but this would restrict your use
                of the Site. Please accept our assurance that our use of cookies
                does not contain any personal or private details and are free
                from viruses. If you want to find out more information about
                cookies, go to&nbsp;
              </span>
              <span lang="en-PK">
                <a href="https://www.allaboutcookies.org/">
                  <span
                    style={{
                      fontSize: "10.5pt",
                      lineHeight: "150%",
                      fontFamily: '"Arial",sans-serif',
                      color: "black",
                    }}
                  >
                    all-about-cookies
                  </span>
                </a>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                &nbsp;or to find out about removing them from your browser, go
                to&nbsp;
              </span>
              <span lang="en-PK">
                <a href="https://www.allaboutcookies.org/manage-cookies/index.html">
                  <span
                    style={{
                      fontSize: "10.5pt",
                      lineHeight: "150%",
                      fontFamily: '"Arial",sans-serif',
                      color: "black",
                    }}
                  >
                    here
                  </span>
                </a>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                .
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                10.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                This website uses Google Analytics, a web analytics service
                provided by Google, Inc. ("Google"). Google Analytics uses
                cookies, which are text files placed on your computer, to help
                the website analyze how users use the site. The information
                generated by the cookie about your use of the website (including
                your IP address) will be transmitted to and stored by Google on
                servers in the United States. Google will use this information
                for the purpose of evaluating your use of the website, compiling
                reports on website activity for website operators and providing
                other services relating to website activity and internet usage.
                Google may also transfer this information to third parties where
                required to do so by law, or where such third parties process
                the information on Google's behalf. Google will not associate
                your IP address with any other data held by Google. You may
                refuse the use of cookies by selecting the appropriate settings
                on your browser, however please note that if you do this you may
                not be able to use the full functionality of this website. By
                using this website, you consent to the processing of data about
                you by Google in the manner and for the purposes set out above.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                11.
                <span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp; </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Security
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                11.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We have in place appropriate technical and security measures to
                prevent unauthorized or unlawful access to or accidental loss of
                or destruction or damage to your information. When we collect
                data through the Site, we collect your personal details on a
                secure server. We use firewalls on our servers. Our security
                procedures mean that we may occasionally request proof of
                identity before we disclose personal information to you. You are
                responsible for protecting against unauthorized access to your
                password and to your computer.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                11.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                You should be aware, however, that no method of transmission
                over the Internet or method of electronic storage is completely
                secure. While security cannot be guaranteed, we strive to
                protect the security of your information and are constantly
                reviewing and enhancing our information security measures.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                12.
                <span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp; </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Your rights
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                12.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                If you are concerned about your data, you have the right to
                request access to the personal data which we may hold or process
                about you. You have the right to require us to correct any
                inaccuracies in your data free of charge. At any stage you also
                have the right to ask us to stop using your personal data for
                direct marketing purposes.
                <br />
                Where permitted by applicable data protection laws, we reserve
                the right to charge a reasonable administrative fee for
                retrieving your personal data records. If so, we will inform you
                of the fee before processing your request.
                <br />
                You may communicate the withdrawal of your consent to the
                continued use, disclosure, storing and/or processing of your
                personal data by contacting our customer services, subject to
                the conditions and/or limitations imposed by applicable laws or
                regulations. Please note that if you communicate your withdrawal
                of your consent to our use, disclosure, storing or processing of
                your personal data for the purposes and in the manner as stated
                above or exercise your other rights as available under
                applicable local laws, we may not be in a position to continue
                to provide the Services to you or perform any contract we have
                with you, and we will not be liable in the event that we do not
                continue to provide the Services to, or perform our contract
                with you. Our legal rights and remedies are expressly reserved
                in such an event.
                <br />
                <br />
                Furthermore, you also have the right to ask us to delete your
                data. If you would like to have your data deleted, fill out
                the&nbsp;
              </span>
              <span lang="en-PK">
                {/* <a href="https://ai.alimebot.daraz.pk/intl/index.htm?from=XwE5eGigSS&attemptquery=account_deactivation_form&spm=a311a.7996332.0.0"> */}
                <span
                  style={{
                    fontSize: "10.5pt",
                    lineHeight: "150%",
                    fontFamily: '"Arial",sans-serif',
                    color: "#d957f9",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={
                    token ? handleDeactivateModalOpen : handleSignInModalOpen
                  }
                >
                  {`Account Deactivation/Deletion Request Form ("Deletion
                  Request")`}
                </span>
                <DeactivateModal
                  showModal={showDeactivateModal}
                  handleModalClose={handleModalClose}
                />
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                &nbsp;or email your request to&nbsp;
                <b>customer@techbazaar.pk.</b>Once your request is received, we
                follow an internal deletion process to make sure that your data
                is safely removed in the next fifteen (15) working days. You'll
                be contacted for verification and your account will be deleted
                after necessary protocols are conformed to. Read more about the
                deletion process&nbsp;
              </span>
              <span lang="en-PK">
                <a href="https://helpcenter.daraz.pk/page/knowledge?pageId=41&knowledge=1000065757">
                  <span
                    style={{
                      fontSize: "10.5pt",
                      lineHeight: "150%",
                      fontFamily: '"Arial",sans-serif',
                      color: "black",
                    }}
                  >
                    here
                  </span>
                </a>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                .
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "18.0pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-18.0pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                13.
                <span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp; </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                Minors
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                13.1.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We do not engage individuals below the age of 18, on the Site
                and we do not knowingly collect any personal data relating to
                minors. You hereby confirm and warrant that you are above the
                age of 18 and are capable of understanding and accepting the
                terms of this Privacy Policy.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpMiddle}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                13.2.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                If you allow a minor to access the Site and buy products from
                the Site by using your account, you hereby consent to the
                processing of the minor's personal data and accept and agree to
                be bound by this Privacy Policy and take responsibility for his
                or her actions.
              </span>
            </p>
            <p
              className={`${styles.MsoListParagraphCxSpLast}`}
              style={{
                marginTop: "12.0pt",
                marginRight: "0cm",
                marginBottom: "7.2pt",
                marginLeft: "39.6pt",
                textAlign: "justify",
                textJustify: "inter-ideograph",
                textIndent: "-21.6pt",
                lineHeight: "150%",
              }}
            >
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                13.3.
                <span style={{ font: '7.0pt "Times New Roman"' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </span>
              <span
                lang="en-PK"
                style={{
                  fontSize: "10.5pt",
                  lineHeight: "150%",
                  fontFamily: '"Arial",sans-serif',
                  color: "black",
                }}
              >
                We will not be responsible for any unauthorized use of your
                account on the Site by yourself, users who act on your behalf or
                any unauthorized users. It is your responsibility to make your
                own informed decisions about the use of the Site and take
                necessary steps to prevent any misuse of the Site.
              </span>
            </p>
            <p
              className={`${styles.MsoNormal}`}
              style={{
                textAlign: "justify",
                textJustify: "inter-ideograph",
                lineHeight: "150%",
              }}
            >
              <span lang="en-PK" style={{ color: "black" }}>
                &nbsp;
              </span>
            </p>
          </div>
        </div>
      </main>
      <SignInModal
        title=" To Delete Account, Please Login First."
        show={showSignInModal}
        onHide={() => setShowSignInModal(false)}
      />
    </>
  );
};

export default PrivacyPolicy;
