import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getPayments } from '../api/payments';
import type { Payment } from '../types';
import {
  Bell, Settings, Eye, EyeOff, ArrowLeftRight, Send,
  CreditCard, Download, FileText, TrendingUp, Home,
  MoreHorizontal, ChevronRight, PlusCircle
} from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const fullName = localStorage.getItem('fullName') || 'User';
  const email = localStorage.getItem('email') || '';
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {
    getPayments()
      .then(setPayments)
      .catch(() => navigate('/login'))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const totalCompleted = payments
    .filter(p => p.status === 'COMPLETED')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = payments
    .filter(p => p.status === 'PENDING')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalBalance = totalCompleted + totalPending + 5000;

  const getInitials = (name: string) =>
    name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  const getHour = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const statusColor = (status: string) => {
    if (status === 'COMPLETED') return '#16A34A';
    if (status === 'FAILED') return '#DC2626';
    return '#D97706';
  };

  const statusBg = (status: string) => {
    if (status === 'COMPLETED') return '#DCFCE7';
    if (status === 'FAILED') return '#FEE2E2';
    return '#FEF3C7';
  };

  return (
    <div style={{ backgroundColor: '#F4F6F9', minHeight: '100vh', fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* Top Nav */}
      <div style={{ backgroundColor: '#1B4FBE', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFBE00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#003168', fontWeight: 'bold', fontSize: '14px' }}>{getInitials(fullName)}</span>
          </div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: 0 }}>Good {getHour()},</p>
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>{fullName}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'flex' }}>
            <Bell size={20} />
          </button>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'flex' }}>
            <Settings size={20} />
          </button>
        </div>
      </div>

      <div style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>

        {/* My Accounts */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1A1A2E', margin: 0 }}>My Accounts</h2>
          <button
            onClick={() => setShowBalance(!showBalance)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
            {showBalance ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Total Balance Card */}
        <div style={{ backgroundColor: '#1B4FBE', borderRadius: '12px', padding: '24px', marginBottom: '12px' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', margin: '0 0 8px 0' }}>Total Balance</p>
          <p style={{ color: 'white', fontSize: '36px', fontWeight: 'bold', margin: 0 }}>
            {showBalance ? `$${totalBalance.toLocaleString('en-CA', { minimumFractionDigits: 2 })}` : '••••••'}
          </p>
        </div>

        {/* Account Rows */}
        {[
          { label: 'Chequing Account', num: '****4521', amount: 5000, icon: <CreditCard size={18} color="#1B4FBE" /> },
          { label: 'Payments Sent', num: email, amount: totalCompleted, icon: <Send size={18} color="#1B4FBE" /> },
          { label: 'Pending Payments', num: `${payments.filter(p => p.status === 'PENDING').length} transactions`, amount: totalPending, icon: <ArrowLeftRight size={18} color="#1B4FBE" /> },
        ].map(acc => (
          <div key={acc.label} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px 20px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {acc.icon}
              </div>
              <div>
                <p style={{ fontWeight: '600', fontSize: '14px', color: '#1A1A2E', margin: 0 }}>{acc.label}</p>
                <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{acc.num}</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '15px', color: '#1A1A2E' }}>
                {showBalance ? `$${acc.amount.toLocaleString('en-CA', { minimumFractionDigits: 2 })}` : '••••'}
              </span>
              <ChevronRight size={16} color="#999" />
            </div>
          </div>
        ))}

        {/* Quick Actions */}
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1A1A2E', margin: '24px 0 16px' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {[
            { icon: <ArrowLeftRight size={20} color="#1B4FBE" />, label: 'Transfer', bg: '#EEF2FF', path: '/send-payment' },
            { icon: <Send size={20} color="#1B4FBE" />, label: 'Send', bg: '#EEF2FF', path: '/send-payment' },
            { icon: <CreditCard size={20} color="#D97706" />, label: 'Pay Bills', bg: '#FEF3C7', path: '/send-payment' },
            { icon: <Download size={20} color="#1B4FBE" />, label: 'Deposit', bg: '#EEF2FF', path: '/dashboard' },
            { icon: <FileText size={20} color="#1B4FBE" />, label: 'Statements', bg: '#EEF2FF', path: '/dashboard' },
            { icon: <TrendingUp size={20} color="#1B4FBE" />, label: 'Invest', bg: '#EEF2FF', path: '/dashboard' },
          ].map(action => (
            <div
              key={action.label}
              onClick={() => navigate(action.path)}
              style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px 8px', textAlign: 'center', cursor: 'pointer', border: '1px solid #E5E7EB' }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: action.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                {action.icon}
              </div>
              <p style={{ fontSize: '12px', color: '#333', fontWeight: '500', margin: 0 }}>{action.label}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {[
            { label: 'Total Payments', value: payments.length, icon: <TrendingUp size={20} color="#1B4FBE" />, color: '#1B4FBE', bg: '#EEF2FF' },
            { label: 'Completed', value: payments.filter(p => p.status === 'COMPLETED').length, icon: <Send size={20} color="#16A34A" />, color: '#16A34A', bg: '#DCFCE7' },
            { label: 'Pending', value: payments.filter(p => p.status === 'PENDING').length, icon: <ArrowLeftRight size={20} color="#D97706" />, color: '#D97706', bg: '#FEF3C7' },
          ].map(stat => (
            <div key={stat.label} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{stat.label}</p>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
              </div>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: stat.color, margin: 0 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1A1A2E', margin: 0 }}>Recent Transactions</h2>
          <Link to="/send-payment" style={{ fontSize: '14px', color: '#1B4FBE', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <PlusCircle size={16} /> Send Payment
          </Link>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading transactions...</div>
          ) : payments.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                <Send size={32} color="#999" />
              </div>
              <p style={{ color: '#666', fontSize: '14px' }}>No payments yet. Send your first payment!</p>
              <Link to="/send-payment" style={{ display: 'inline-block', marginTop: '16px', backgroundColor: '#1B4FBE', color: 'white', padding: '10px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
                Send Payment
              </Link>
            </div>
          ) : (
            payments.map((p, i) => (
              <div key={p.id} style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < payments.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Send size={16} color="#1B4FBE" />
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: '#1A1A2E', margin: 0 }}>→ {p.receiverId}</p>
                    <p style={{ fontSize: '12px', color: '#666', margin: '2px 0 0' }}>
                      {p.description || 'No description'} · {new Date(p.createdAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '15px', color: '#1A1A2E', margin: 0 }}>
                    ${p.amount.toFixed(2)} {p.currency}
                  </p>
                  <span style={{ fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '20px', backgroundColor: statusBg(p.status), color: statusColor(p.status) }}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-around', padding: '12px 0' }}>
        {[
          { icon: <Home size={20} />, label: 'Home', active: true, path: '/dashboard' },
          { icon: <ArrowLeftRight size={20} />, label: 'Transfer', active: false, path: '/send-payment' },
          { icon: <CreditCard size={20} />, label: 'Pay', active: false, path: '/send-payment' },
          { icon: <TrendingUp size={20} />, label: 'Invest', active: false, path: '/dashboard' },
          { icon: <MoreHorizontal size={20} />, label: 'More', active: false, path: '/dashboard' },
        ].map(item => (
          <div
            key={item.label}
            onClick={() => navigate(item.path)}
            style={{ textAlign: 'center', cursor: 'pointer', padding: '4px 16px', color: item.active ? '#1B4FBE' : '#666' }}
          >
            {item.icon}
            <p style={{ fontSize: '11px', color: item.active ? '#1B4FBE' : '#666', fontWeight: item.active ? '600' : '400', margin: '2px 0 0' }}>{item.label}</p>
            {item.active && <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#1B4FBE', margin: '2px auto 0' }} />}
          </div>
        ))}
      </div>

      <div style={{ height: '80px' }} />
    </div>
  );
}