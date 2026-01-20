import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="pt-32 pb-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold gradient-text">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <Link to="/" className="glow-button text-primary-foreground">
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
