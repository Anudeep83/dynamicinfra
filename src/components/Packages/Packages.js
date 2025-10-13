import React from 'react';
import './Packages.css'; // Make sure this contains your CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.webp';


const PrivacyPolicy = () => {
  const effectiveDate = new Date().toLocaleDateString();

  return (
    <>
        <div className='privacy-head'>
            <Link to = '/'>
                <img src = {logo} className='privacy-logo' alt='privacy-logo'/>
            </Link>
            <h1>Dynamic Infra Projects</h1>
        </div>
        <div className="privacy-root">
            <div>
                <Link to = '/'>
                    <FontAwesomeIcon icon={faCircleLeft} style={{ color: "#92101b", width:'30px', height:'30px' }} />
                </Link>
            </div>
        <div className="privacy-card">
            <header className="privacy-header">
            <h1>Privacy Policy</h1>
            <p className="effective">Effective date: {effectiveDate}</p>
            <p className="lead">
                This Privacy Policy describes how Dynamic Infra collects, uses, stores and discloses your information when you use our website and services.
            </p>
            </header>

            <section>
            <h2>Information we collect</h2>
            <p>We collect information you provide directly and usage data created automatically when you use our services. That includes:</p>
            <ul>
                <li>Contact details (name, email, phone)</li>
                <li>Service and site usage details</li>
                <li>Location and address information when relevant</li>
                <li>Payment and order history when applicable</li>
                <li>Cookies and device identifiers</li>
            </ul>
            </section>

            <section>
            <h2>How we use your data</h2>
            <p>We use collected data to operate and improve our services, communicate with you, process transactions, and provide support. Typical uses include:</p>
            <ul>
                <li>Delivering and maintaining our services</li>
                <li>Customer support and service notifications</li>
                <li>Personalization and analytics</li>
                <li>Fraud prevention and legal compliance</li>
            </ul>
            </section>

            <section>
            <h2>Cookies and tracking</h2>
            <p>We use cookies and similar technologies to track activity, remember preferences and secure the site. You can control cookies through your browser settings but some features may not work without them.</p>
            </section>

            <section>
            <h2>Third party services and disclosure</h2>
            <p>We may share information with service providers who perform services on our behalf. We may also disclose data to comply with legal obligations or protect rights and safety. We do not sell your personal information for marketing to unrelated third parties.</p>
            </section>

            <section>
            <h2>Data storage and retention</h2>
            <p>We retain personal data only as long as needed to provide services and to meet legal obligations. We store data on secure servers and apply reasonable technical and organizational safeguards.</p>
            </section>

            <section>
            <h2>Analytics</h2>
            <p>We use analytics providers to understand usage patterns. If you prefer, you may opt out using available tools from those providers (for example, Google Analytics opt-out add-on).</p>
            </section>

            <section>
            <h2>Children</h2>
            <p>Our services are not meant for children under 18. We do not knowingly collect personal data from minors.</p>
            </section>

            <section>
            <h2>Your rights</h2>
            <p>Depending on your jurisdiction you may have rights to access, correct, delete or port your personal data. To exercise those rights, contact us at the email below. We may take reasonable time to verify and process requests.</p>
            </section>

            <section>
            <h2>Changes to this policy</h2>
            <p>We may update this policy. We will post the revised policy on this page and update the effective date. Review it periodically.</p>
            </section>

            <footer className="privacy-footer">
            <div>
                <h3>Contact Us</h3>
                <p>If you have questions or requests about your data, email us at <a href="mailto:support@dynamicinfraprojects.com">support@dynamicinfraprojects.com</a>.</p>
            </div>

            <div className="grievance">
                <p>Name: Dynamic Infra Projects</p>
                <p>Email: <a href="mailto:support@dynamicinfraprojects.com">support@dynamicinfraprojects.com</a></p>
                <p>We will acknowledge and respond to grievances within 31 days.</p>
            </div>
            </footer>
        </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;
