import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Zap, Smartphone, Shield, BarChart2, CreditCard,
  Lock, Coffee, Leaf, Database, Atom, Container,
  Activity, UserPlus, CheckCircle, Rocket, ChevronDown, ChevronUp
} from 'lucide-react';

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", backgroundColor: '#FFFFFF' }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: '#1B4FBE', padding: '16px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#FFBE00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#003168', fontWeight: 'bold', fontSize: '14px' }}>PF</span>
          </div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>PayFlow</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#how-it-works" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>How it Works</a>
          <a href="#features" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>Features</a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>Pricing</a>
          <a href="#faq" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>FAQ</a>
          <Link to="/login" style={{ backgroundColor: '#FFBE00', color: '#003168', padding: '10px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}>
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: '#1B4FBE', padding: '100px 48px 120px' }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px 16px', borderRadius: '20px', marginBottom: '32px' }}>
            <Zap size={14} color="#FFBE00" />
            <span style={{ color: 'white', fontSize: '14px' }}>Now with instant e-Transfers</span>
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', color: 'white', lineHeight: '1.1', marginBottom: '24px' }}>
            Banking that works<br />
            <span style={{ color: '#FFBE00' }}>for you.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '40px', lineHeight: '1.6', maxWidth: '480px' }}>
            Experience seamless banking with powerful tools to manage, grow, and protect your money — all in one app.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/register" style={{ backgroundColor: '#FFBE00', color: '#003168', padding: '14px 28px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', textDecoration: 'none' }}>
              Get Started →
            </Link>
            <a href="#how-it-works" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '14px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '16px', textDecoration: 'none' }}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: 'white', padding: '48px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '32px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {[
            { value: '10M+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '$0', label: 'Monthly Fees' },
            { value: '24/7', label: 'Support' },
          ].map(stat => (
            <div key={stat.label}>
              <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#1B4FBE', marginBottom: '4px' }}>{stat.value}</p>
              <p style={{ fontSize: '14px', color: '#666' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ backgroundColor: 'white', padding: '80px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '12px' }}>How it works</h2>
          <p style={{ fontSize: '16px', color: '#666', maxWidth: '480px', margin: '0 auto' }}>
            Get started in minutes. No paperwork. No branch visits.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { step: '01', icon: <UserPlus size={36} color="#1B4FBE" />, title: 'Create your account', desc: 'Sign up with your name and email. Takes less than 2 minutes. No credit check required.' },
            { step: '02', icon: <CreditCard size={36} color="#1B4FBE" />, title: 'Add your details', desc: "Set up your profile, verify your identity, and you're ready to start banking." },
            { step: '03', icon: <Rocket size={36} color="#1B4FBE" />, title: 'Start banking', desc: 'Send payments, track transactions, and manage your money in real time.' },
          ].map(item => (
            <div key={item.step} style={{ textAlign: 'center', padding: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#1B4FBE', marginBottom: '16px', letterSpacing: '2px' }}>{item.step}</div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ backgroundColor: '#F4F6F9', padding: '80px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '12px' }}>Everything you need</h2>
          <p style={{ fontSize: '16px', color: '#666', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>
            Powerful features designed to make your banking experience effortless.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { icon: <Smartphone size={22} color="#1B4FBE" />, title: 'Mobile Banking', desc: 'Manage your accounts, pay bills, and transfer money — all from your phone.' },
            { icon: <Shield size={22} color="#1B4FBE" />, title: 'Secure & Protected', desc: 'Bank-grade encryption and JWT authentication keep your money safe.' },
            { icon: <BarChart2 size={22} color="#1B4FBE" />, title: 'Smart Insights', desc: 'Track spending, monitor your transactions, and get financial visibility.' },
            { icon: <CreditCard size={22} color="#1B4FBE" />, title: 'Instant Payments', desc: 'Send and receive money instantly with real-time Kafka event processing.' },
            { icon: <Lock size={22} color="#1B4FBE" />, title: 'Fraud Protection', desc: 'Real-time event monitoring and instant transaction alerts protect you.' },
            { icon: <Zap size={22} color="#1B4FBE" />, title: 'Quick Actions', desc: 'Pay bills, send payments, and transfer funds in just a few clicks.' },
          ].map(feature => (
            <div key={feature.title} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '32px', border: '1px solid #E5E7EB' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '10px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: 'white', padding: '80px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '12px' }}>What our users say</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>Trusted by thousands of Canadians.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { name: 'Sarah M.', location: 'Toronto, ON', rating: '★★★★★', text: 'PayFlow makes sending money so simple. I use it every week to split bills with my roommates.' },
            { name: 'James K.', location: 'Vancouver, BC', rating: '★★★★★', text: "The real-time notifications are incredible. I always know exactly what's happening with my money." },
            { name: 'Priya S.', location: 'Calgary, AB', rating: '★★★★★', text: 'Finally a banking app that feels modern. The dashboard is clean and everything just works.' },
          ].map(t => (
            <div key={t.name} style={{ backgroundColor: '#F4F6F9', borderRadius: '12px', padding: '28px', border: '1px solid #E5E7EB' }}>
              <p style={{ color: '#FFBE00', fontSize: '18px', marginBottom: '12px' }}>{t.rating}</p>
              <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.7', marginBottom: '20px', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1B4FBE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>{t.name[0]}</span>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold', fontSize: '14px', color: '#1A1A2E', margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ backgroundColor: '#F4F6F9', padding: '80px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '12px' }}>Simple, transparent pricing</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>No hidden fees. No surprises.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { name: 'Basic', price: '$0', period: '/mo', desc: 'Perfect for getting started', features: ['Up to 10 payments/month', 'Basic transaction history', 'Email support', 'JWT secured account'], highlighted: false },
            { name: 'Standard', price: '$0', period: '/mo', desc: 'Most popular choice', features: ['Unlimited payments', 'Full transaction history', 'Real-time Kafka events', 'Grafana monitoring', 'Priority support'], highlighted: true },
            { name: 'Premium', price: '$0', period: '/mo', desc: 'For power users', features: ['Everything in Standard', 'API access', 'Advanced analytics', 'Dedicated support', 'Custom integrations'], highlighted: false },
          ].map(plan => (
            <div key={plan.name} style={{
              backgroundColor: plan.highlighted ? '#1B4FBE' : 'white',
              borderRadius: '12px', padding: '32px',
              border: plan.highlighted ? 'none' : '1px solid #E5E7EB',
              transform: plan.highlighted ? 'scale(1.05)' : 'none',
              boxShadow: plan.highlighted ? '0 20px 40px rgba(27,79,190,0.3)' : 'none',
            }}>
              {plan.highlighted && (
                <div style={{ backgroundColor: '#FFBE00', color: '#003168', fontSize: '11px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '20px', display: 'inline-block', marginBottom: '16px' }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: plan.highlighted ? 'white' : '#1A1A2E', marginBottom: '4px' }}>{plan.name}</h3>
              <p style={{ fontSize: '13px', color: plan.highlighted ? 'rgba(255,255,255,0.7)' : '#666', marginBottom: '20px' }}>{plan.desc}</p>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '40px', fontWeight: 'bold', color: plan.highlighted ? 'white' : '#1A1A2E' }}>{plan.price}</span>
                <span style={{ fontSize: '14px', color: plan.highlighted ? 'rgba(255,255,255,0.7)' : '#666' }}>{plan.period}</span>
              </div>
              <div style={{ marginBottom: '28px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: plan.highlighted ? 'rgba(255,255,255,0.9)' : '#333', marginBottom: '10px' }}>
                    <CheckCircle size={14} color={plan.highlighted ? '#FFBE00' : '#1B4FBE'} /> {f}
                  </div>
                ))}
              </div>
              <Link to="/register" style={{
                display: 'block', textAlign: 'center', padding: '12px', borderRadius: '8px',
                fontWeight: 'bold', fontSize: '14px', textDecoration: 'none',
                backgroundColor: plan.highlighted ? '#FFBE00' : '#1B4FBE',
                color: plan.highlighted ? '#003168' : 'white',
              }}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

     {/* Why PayFlow */}
<section style={{ backgroundColor: 'white', padding: '80px 48px' }}>
  <div style={{ display: 'flex', gap: '64px', maxWidth: '1100px', margin: '0 auto', alignItems: 'center' }}>
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#1B4FBE', letterSpacing: '2px', marginBottom: '16px' }}>WHY PAYFLOW</p>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '24px', lineHeight: '1.2' }}>
        Banking that puts you first
      </h2>
      <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8', marginBottom: '32px' }}>
        Unlike traditional banks, PayFlow was built from the ground up for Canadians who want speed, transparency, and control over their money — without the fees.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { icon: <CheckCircle size={20} color="#16A34A" />, text: 'No monthly fees, no minimum balance' },
          { icon: <CheckCircle size={20} color="#16A34A" />, text: 'Real-time payment notifications' },
          { icon: <CheckCircle size={20} color="#16A34A" />, text: 'Instant e-Transfers across Canada' },
          { icon: <CheckCircle size={20} color="#16A34A" />, text: 'Bank-grade security on every transaction' },
        ].map(item => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {item.icon}
            <span style={{ fontSize: '15px', color: '#333' }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>

    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      {[
        { value: '$0', label: 'Monthly fees', sub: 'Forever free', color: '#EEF2FF' },
        { value: '2 min', label: 'To open account', sub: 'No paperwork', color: '#DCFCE7' },
        { value: '256-bit', label: 'Encryption', sub: 'Bank-grade security', color: '#FEF3C7' },
        { value: '24/7', label: 'Support', sub: 'Always available', color: '#FEE2E2' },
      ].map(card => (
        <div key={card.label} style={{ backgroundColor: card.color, borderRadius: '12px', padding: '24px' }}>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '4px' }}>{card.value}</p>
          <p style={{ fontSize: '14px', fontWeight: '600', color: '#1A1A2E', marginBottom: '2px' }}>{card.label}</p>
          <p style={{ fontSize: '12px', color: '#666' }}>{card.sub}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* FAQ */}
      <section id="faq" style={{ backgroundColor: '#F4F6F9', padding: '80px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A1A2E', marginBottom: '12px' }}>Frequently asked questions</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>Everything you need to know about PayFlow.</p>
        </div>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {[
            { q: 'How do I open a PayFlow account?', a: "Click 'Get Started', fill in your name, email and password. You'll be logged in and ready to go instantly." },
            { q: 'Is PayFlow free to use?', a: 'Yes. PayFlow is completely free. No monthly fees, no hidden charges, and no minimum balance required.' },
            { q: 'How do I send a payment?', a: "From your dashboard, click 'Send Payment', enter the recipient ID, amount, currency and description. Done." },
            { q: 'Is my money and data secure?', a: 'Absolutely. PayFlow uses JWT authentication, Spring Security, encrypted database connections, and real-time monitoring via Grafana.' },
            { q: 'What currencies are supported?', a: 'CAD, USD, and EUR are currently supported with more currencies coming soon.' },
            { q: 'Can I track my payment history?', a: 'Yes. Every transaction is visible on your dashboard with full status tracking — PENDING, COMPLETED, or FAILED.' },
          ].map((faq, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '8px', marginBottom: '8px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#1A1A2E' }}>{faq.q}</span>
                {openFaq === i
                  ? <ChevronUp size={18} color="#1B4FBE" />
                  : <ChevronDown size={18} color="#1B4FBE" />
                }
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px' }}>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1B4FBE', padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Ready to take control?</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Join thousands of Canadians who trust PayFlow for their everyday banking.
        </p>
        <Link to="/register" style={{ backgroundColor: '#FFBE00', color: '#003168', padding: '16px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '18px', textDecoration: 'none', display: 'inline-block' }}>
          Open an Account
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', padding: '24px 48px', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#1B4FBE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>PF</span>
          </div>
          <span style={{ fontWeight: 'bold', color: '#1A1A2E', fontSize: '16px' }}>PayFlow</span>
        </div>
        <p style={{ fontSize: '14px', color: '#666' }}>© 2026 PayFlow. All rights reserved.</p>
      </footer>

    </div>
  );
}