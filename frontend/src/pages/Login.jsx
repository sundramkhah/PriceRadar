import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice.js';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    const result = await dispatch(login(form));
    if (result.meta.requestStatus === 'fulfilled') navigate('/');
    else setError(result.error.message || 'Login failed');
  };

  return (
    <AuthShell title="Login">
      <form onSubmit={submit} className="space-y-4">
        <Field label="Email" type="email" value={form.email} onChange={(email) => setForm({ ...form, email })} />
        <Field label="Password" type="password" value={form.password} onChange={(password) => setForm({ ...form, password })} />
        {error && <p className="text-sm text-coral">{error}</p>}
        <button disabled={loading} className="w-full rounded-lg bg-ink px-4 py-3 font-semibold text-white disabled:opacity-60">Login</button>
        <p className="text-center text-sm text-muted">New here? <Link className="font-semibold text-mint" to="/register">Create account</Link></p>
      </form>
    </AuthShell>
  );
}

function AuthShell({ title, children }) {
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-md place-items-center px-4 py-10">
      <div className="w-full rounded-lg border border-line bg-white p-6 shadow-soft">
        <h1 className="mb-5 text-2xl font-semibold text-ink">{title}</h1>
        {children}
      </div>
    </div>
  );
}

function Field({ label, type, value, onChange }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-muted">{label}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} required className="w-full rounded-lg border border-line px-3 py-3 outline-none focus:border-mint" />
    </label>
  );
}
