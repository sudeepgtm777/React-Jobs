import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Sign in failed');
      const data = await res.json();

      // Example: save token in localStorage
      localStorage.setItem('token', data.token);

      // Redirect to home
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-indigo-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-lg shadow-md w-80'
      >
        <h2 className='text-2xl font-bold mb-4'>Sign In</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <input
          type='email'
          placeholder='Email'
          className='w-full p-2 border rounded mb-3'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full p-2 border rounded mb-3'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type='submit'
          className='w-full bg-indigo-700 text-white py-2 rounded'
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
