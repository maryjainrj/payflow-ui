import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/auth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await login({ email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('fullName', data.fullName);
      localStorage.setItem('email', data.email);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>

      {/* Left Panel */}
      <div style={{ width: '50%', backgroundColor: '#003168', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFBE00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#003168', fontWeight: 'bold', fontSize: '18px' }}>P</span>
          </div>
          <span style={{ color: 'white', fontSize: '22px', fontWeight: 'bold' }}>PayFlow</span>
        </div>

        <div>
          <h2 style={{ color: 'white', fontSize: '40px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '16px' }}>
            Banking made <br /><span style={{ color: '#FFBE00' }}>simple.</span>
          </h2>
          <p style={{ color: '#93C5FD', fontSize: '18px' }}>Send money. Track payments. Stay in control.</p>
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          {['Secure', 'Fast', 'Reliable'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FFBE00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#003168', fontSize: '11px', fontWeight: 'bold' }}>✓</span>
              </div>
              <span style={{ color: '#93C5FD', fontSize: '14px' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: '48px' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '8px' }}>Sign in</h1>
          <p style={{ color: '#666', marginBottom: '32px' }}>Welcome back. Enter your credentials to continue.</p>

          {error && (
            <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', padding: '12px 16px', borderRadius: '8px', marginBottom: '24px', fontSize: '14px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1A1A1A', marginBottom: '8px' }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                style={{ width: '100%', border: '1px solid #D1D5DB', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', color: '#1A1A1A', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}>Password</label>
                <a href="#" style={{ fontSize: '13px', color: '#005DAA', textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{ width: '100%', border: '1px solid #D1D5DB', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ width: '100%', backgroundColor: loading ? '#ccc' : '#005DAA', color: 'white', padding: '14px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #F3F4F6', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#666' }}>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: '#005DAA', fontWeight: '600', textDecoration: 'none' }}>Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}