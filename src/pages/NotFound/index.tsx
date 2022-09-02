import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="pt-10 text-center">
      Page not found! Go to{' '}
      <a
        className="underline cursor-context-menu text-blue-500"
        onClick={() => navigate('/')}
      >
        Home
      </a>{' '}
      page!
    </div>
  );
}

export default NotFound;
