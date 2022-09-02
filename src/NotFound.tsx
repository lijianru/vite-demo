import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      Page not found! Go to <a onClick={() => navigate('/')}>Home</a> page!
    </div>
  );
}

export default NotFound;
