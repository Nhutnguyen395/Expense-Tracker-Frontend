import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService.js';

function loginPage() {
  /*
    useState is how React components remember things.
    We need to remember what is inputed by the users.
  */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /*
    useNavigate is React's way to redirect to another page
  */
  const navigate = useNavigate();

  /*
    Submit function runs when the user press submit
  */

  const handleSubmit = async (event) => {
    // prevents the browser from doing a full page refresh
    event.preventDefault();
    setError('');

    try{
      /*
        calls the login function from authService.
        If login is successful then navigate to the main dashboard page.
      */
      await login({username, password});
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid username or password.');
    }
  };
  
  /*
    The return block contains JSX, which looks like HTML but is actually JavaSript.
    It describe what the UI should look like.
  */
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* If there is an error, display it here */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default loginPage;