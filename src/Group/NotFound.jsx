import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
      return;
    }

    navigate('/');
  };

  return (
    <section className="notfound-page-v2">
      <div className="notfound-panel">
        <p className="portfolio-kicker">404</p>
        <h1>Looks like this route drifted off course.</h1>
        <p className="notfound-lede">
          The page may have moved, been renamed, or never existed. The good news: the portfolio is still right here.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="cta-button">
            Portfolio
          </Link>
          <button type="button" onClick={handleGoBack} className="cta-button cta-button-secondary">
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
