import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

      {/* Top Bar */}
      <div style={{ backgroundColor: '#003168', padding: '8px 48px', display: 'flex', justifyContent: 'flex-end', gap: '24px' }}>
        {['Personal', 'Business', 'About PayFlow'].map(item => (
          <a key={item} href="#" style={{ color: '#93C5FD', fontSize: '12px', textDecoration: 'none' }}>{item}</a>
        ))}
      </div>

      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 48px', borderBottom: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#005DAA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>P</span>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#003168' }}>PayFlow</div>
            <div style={{ fontSize: '11px', color: '#666' }}>Digital Banking</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Accounts', 'Payments', 'Security', 'About'].map(item => (
            <a key={item} href="#" style={{ fontSize: '14px', fontWeight: '500', color: '#003168', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>
        <Link to="/login" style={{ backgroundColor: '#FFBE00', color: '#003168', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}>
          Sign In
        </Link>
      </nav>

      {/* Hero Banner */}
      <div style={{ backgroundColor: '#003168', padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: '500px' }}>
          <div style={{ backgroundColor: '#FFBE00', color: '#003168', fontSize: '11px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '4px', display: 'inline-block', marginBottom: '16px' }}>
            PAYFLOW DIGITAL BANKING OFFER
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: 'white', lineHeight: '1.2', marginBottom: '16px' }}>
            Open a Free<br />Digital Banking<br />Account
          </h1>
          <p style={{ color: '#93C5FD', fontSize: '16px', marginBottom: '24px' }}>
            Send money, track payments, and manage your finances securely.
          </p>
          <Link to="/register" style={{ border: '2px solid white', color: 'white', padding: '12px 28px', borderRadius: '4px', fontWeight: '600', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}>
            Open Free Account Online
          </Link>
        </div>
        <div style={{ color: '#FFBE00', fontSize: '120px' }}>🏦</div>
      </div>

      {/* Main Content Card */}
      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 24px' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '8px' }}>
            Apply for a Digital Banking Account Online in Minutes
          </h2>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Knowing more about you can help us offer the right account. Choose the option that describes you best.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0', borderBottom: '1px solid #E5E7EB', marginBottom: '32px' }}>
          {["I'm New to PayFlow", "I'm a Student", "I'm New to Canada", "Help Me Choose"].map((tab, i) => (
            <a key={tab} href="#" style={{
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: i === 0 ? '600' : '400',
              color: i === 0 ? '#005DAA' : '#333',
              borderBottom: i === 0 ? '3px solid #005DAA' : '3px solid transparent',
              textDecoration: 'none',
              display: 'inline-block',
              whiteSpace: 'nowrap'
            }}>
              {tab}
            </a>
          ))}
        </div>

        {/* Account Cards Title */}
        <h3 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '24px' }}>
          Our Most Popular Chequing & Savings Accounts
        </h3>

        {/* Account Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '16px' }}>

          {/* Card 1 */}
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#005DAA', padding: '24px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>PayFlow Standard</h4>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>No Limit Banking account</h4>
              <p style={{ fontSize: '13px', color: '#BFDBFE', fontStyle: 'italic' }}>Unlimited Transfers & Even More</p>
            </div>
            <div style={{ padding: '20px' }}>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <span style={{ border: '1px solid #005DAA', color: '#005DAA', fontSize: '12px', padding: '4px 16px', borderRadius: '20px' }}>Chequing Account</span>
              </div>
              <div style={{ marginBottom: '16px' }}>
                {['Unlimited payment transactions in Canada', 'Real-time Kafka event processing', 'FREE e-Transfer transactions'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#333', marginBottom: '8px' }}>
                    <span style={{ color: '#005DAA' }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#1A1A1A' }}>$0</span>
                <span style={{ fontSize: '14px', color: '#666' }}> /mo</span>
              </div>
              <Link to="/register" style={{ display: 'block', textAlign: 'center', backgroundColor: '#005DAA', color: 'white', padding: '12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none', marginBottom: '8px' }}>
                Apply Online Now
              </Link>
              <a href="#" style={{ display: 'block', textAlign: 'center', fontSize: '13px', color: '#005DAA', textDecoration: 'none' }}>
                View More Account Benefits ›
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#EFF6FF', padding: '24px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#003168', marginBottom: '4px' }}>PayFlow Premium</h4>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#003168', marginBottom: '8px' }}>eSavings Account</h4>
              <p style={{ fontSize: '13px', color: '#005DAA', fontStyle: 'italic' }}>Competitive Interest</p>
            </div>
            <div style={{ padding: '20px' }}>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <span style={{ border: '1px solid #005DAA', color: '#005DAA', fontSize: '12px', padding: '4px 16px', borderRadius: '20px' }}>Savings Account</span>
              </div>
              <div style={{ marginBottom: '16px' }}>
                {['No minimum deposit required', 'Earn interest on every dollar', 'Unlimited transfers to your other accounts'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#333', marginBottom: '8px' }}>
                    <span style={{ color: '#005DAA' }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#1A1A1A' }}>$0</span>
                <span style={{ fontSize: '14px', color: '#666' }}> /mo</span>
              </div>
              <Link to="/register" style={{ display: 'block', textAlign: 'center', backgroundColor: '#005DAA', color: 'white', padding: '12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none', marginBottom: '8px' }}>
                Apply Online Now
              </Link>
              <a href="#" style={{ display: 'block', textAlign: 'center', fontSize: '13px', color: '#005DAA', textDecoration: 'none' }}>
                View More Account Benefits ›
              </a>
            </div>
          </div>
        </div>

        {/* View All Links */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px' }}>
          <a href="#" style={{ fontSize: '13px', color: '#005DAA', textDecoration: 'none' }}>⊙ View All Chequing Accounts</a>
          <a href="#" style={{ fontSize: '13px', color: '#005DAA', textDecoration: 'none' }}>⊙ View All Savings Accounts</a>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ backgroundColor: '#F9FAFB', padding: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1A1A1A', textAlign: 'center', marginBottom: '8px' }}>
          PayFlow Accounts Come with These Extra Benefits
        </h2>
        <p style={{ fontSize: '14px', color: '#666', textAlign: 'center', marginBottom: '40px' }}>
          Built with enterprise-grade technology for Canadian users.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {[
            { icon: '🔒', title: 'Security Guarantee', desc: 'JWT authentication and Spring Security protect every transaction.' },
            { icon: '⚡', title: 'No Minimum Balance', desc: 'Pay as low as $0/month. No minimum balance required.' },
            { icon: '🛡️', title: 'Data Protection', desc: 'Your data is encrypted and secured with enterprise-grade infrastructure.' },
          ].map(b => (
            <div key={b.title}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{b.icon}</div>
              <h3 style={{ fontWeight: 'bold', color: '#1A1A1A', marginBottom: '8px', fontSize: '15px' }}>{b.title}</h3>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1A1A1A', textAlign: 'center', marginBottom: '32px' }}>
          Top Bank Account Questions
        </h2>
        {[
          { q: 'How do I open a PayFlow account?', a: "Click 'Open Free Account', fill in your name, email and password. You'll be logged in instantly." },
          { q: 'How do I send a payment?', a: "From your dashboard, click 'Send Payment', enter the recipient ID, amount, and currency." },
          { q: 'Is my data secure?', a: 'Yes. PayFlow uses JWT authentication, Spring Security, and encrypted database connections.' },
          { q: 'Can I open a bank account online?', a: 'Yes. The entire process is online. No branch visit required.' },
        ].map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid #E5E7EB', padding: '16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
            <p style={{ fontSize: '14px', color: '#005DAA', fontWeight: '500' }}>{faq.q}</p>
            <span style={{ color: '#005DAA', fontSize: '18px' }}>∨</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003168', padding: '40px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '32px', marginBottom: '32px' }}>
          {[
            { title: 'Customer Service', links: ['General Inquiries', 'Open an Account', 'Contact Support'] },
            { title: 'Account Information', links: ['Account Features', 'Security Info', 'Privacy Policy'] },
            { title: 'Get More', links: ['Send Payments', 'View History', 'Dashboard'] },
            { title: 'Technology Stack', links: ['Java + Spring Boot', 'Apache Kafka', 'React + TypeScript'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: 'white', fontWeight: 'bold', fontSize: '13px', marginBottom: '12px' }}>{col.title}</h4>
              {col.links.map(link => (
                <a key={link} href="#" style={{ display: 'block', color: '#93C5FD', fontSize: '12px', marginBottom: '8px', textDecoration: 'none' }}>› {link}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #1E3A5F', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#93C5FD', fontSize: '12px' }}>PayFlow Digital Banking © 2026. Built with Java, Spring Boot, Kafka & React.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Legal', 'Privacy', 'Security', 'Accessibility'].map(l => (
              <a key={l} href="#" style={{ color: '#93C5FD', fontSize: '12px', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}