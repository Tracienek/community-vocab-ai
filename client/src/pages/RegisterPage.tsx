import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function RegisterPage() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({ id: '1', name, email }, 'demo-token');
    nav('/');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 420 }}>
      <h3 className="mb-3 text-center">Register</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input className="form-control" value={name} onChange={e=>setName(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        </div>
        <button className="btn btn-success w-100" type="submit">Create account</button>
      </form>
      <p className="mt-3 text-center">Have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
