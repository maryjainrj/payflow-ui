import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createPayment } from '../api/payments';

export default function SendPayment() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    senderId: localStorage.getItem('email') || '',
    receiverId: '',
    amount: '',
    currency: 'CAD',
    description: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createPayment({
        ...form,
        amount: parseFloat(form.amount),
      });
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-900 text-white px-6 py-4">
        <h1 className="text-xl font-bold">PayFlow</h1>
      </nav>

      <div className="max-w-lg mx-auto p-6">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/dashboard" className="text-blue-600 hover:underline text-sm">
            ← Back
          </Link>
          <h2 className="text-2xl font-semibold text-gray-800">Send Payment</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipient ID
              </label>
              <input
                type="text"
                name="receiverId"
                value={form.receiverId}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="user-002"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                required
                min="0.01"
                step="0.01"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Rent payment, dinner, etc."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Payment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}