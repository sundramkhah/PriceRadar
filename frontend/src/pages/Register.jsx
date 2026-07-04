import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../store/authSlice.js';

export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    const result = await dispatch(register(form));
    if (result.meta.requestStatus === 'fulfilled') navigate('/');
    else setError(result.error.message || 'Registration failed');
  };

  return (
    <div className="mx-auto grid min-h-[70vh] max-w-md place-items-center px-4 py-10">
      <form onSubmit={submit} className="w-full space-y-4 rounded-lg border border-line bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-semibold text-ink">Create account</h1>
        <Input label="Name" value={form.name} onChange={(name) => setForm({ ...form, name })} />
        <Input label="Email" type="email" value={form.email} onChange={(email) => setForm({ ...form, email })} />
        <Input label="Password" type="password" value={form.password} onChange={(password) => setForm({ ...form, password })} />
        {error && <p className="text-sm text-coral">{error}</p>}
        <button disabled={loading} className="w-full rounded-lg bg-mint px-4 py-3 font-semibold text-white disabled:opacity-60">Register</button>
        <p className="text-center text-sm text-muted">Already registered? <Link className="font-semibold text-mint" to="/login">Login</Link></p>
      </form>
    </div>
  );
}

function Input({ label, type = 'text', value, onChange }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-muted">{label}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} required className="w-full rounded-lg border border-line px-3 py-3 outline-none focus:border-mint" />
    </label>
  );
}
