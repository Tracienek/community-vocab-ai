import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: gọi API register thật, nhận token/user rồi login()
    login({ id: '1', name: name || email.split('@')[0], email }, 'demo-token');
    nav('/');
  };

  return (
    <div className="auth-wrap d-flex align-items-center justify-content-center">
      <div className="card auth-card shadow-sm">
        <div className="card-body">
          <h3 className="mb-3 text-center text-brand">Create account</h3>
          <p className="text-center text-muted mb-4">Join Community Vocab AI</p>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  className="form-control"
                  type={show ? 'text' : 'password'}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="At least 8 characters"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShow((s) => !s)}
                >
                  {show ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button className="btn btn-brand w-100 mt-3" type="submit">
              Create account
            </button>
          </form>

          <p className="mt-3 text-center">
            Have an account? <Link to="/login" className="link-brand">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
