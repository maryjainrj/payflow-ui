import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getPayments } from '../api/payments';
import type { Payment } from '../types';

export default function Dashboard() {
  const navigate = useNavigate();
  const fullName = localStorage.getItem('fullName') || 'User';
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

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

  const statusColor = (status: string) => {
    if (status === 'COMPLETED') return 'text-green-600 bg-green-50';
    if (status === 'FAILED') return 'text-red-600 bg-red-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  const totalSent = payments
    .filter(p => p.status === 'COMPLETED')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">PayFlow</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">{fullName}</span>
          <button
            onClick={handleLogout}
            className="text-sm bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Good morning, {fullName.split(' ')[0]} 👋
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Payments</p>
            <p className="text-2xl font-bold text-blue-900">{payments.length}</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Completed</p>
            <p className="text-2xl font-bold text-green-600">
              ${totalSent.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Send Payment Button */}
        <Link
          to="/send-payment"
          className="inline-block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition mb-6"
        >
          + Send Payment
        </Link>

        {/* Recent Payments */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-5 py-4 border-b">
            <h3 className="font-semibold text-gray-700">Recent Transactions</h3>
          </div>

          {loading ? (
            <p className="p-5 text-gray-400">Loading...</p>
          ) : payments.length === 0 ? (
            <p className="p-5 text-gray-400">No payments yet.</p>
          ) : (
            <ul className="divide-y">
              {payments.map(p => (
                <li key={p.id} className="px-5 py-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">→ {p.receiverId}</p>
                    <p className="text-sm text-gray-400">{p.description || 'No description'}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">
                      ${p.amount.toFixed(2)} {p.currency}
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor(p.status)}`}>
                      {p.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}