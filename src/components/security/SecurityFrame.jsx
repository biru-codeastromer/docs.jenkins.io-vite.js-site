import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function SecurityFrame({ title, description, children, notitle }) {
  useEffect(() => {
    let tries = 0;
    const run = () => {
      if (window.anchors) {
        for (let i = 1; i <= 6; i++) window.anchors.add(`.container .row.body h${i}`);
        for (let i = 1; i <= 6; i++) window.anchors.add(`.app-container h${i}`);
        return true;
      }
      return false;
    };
    if (!run()) {
      const id = setInterval(() => { if (run() || ++tries > 20) clearInterval(id); }, 100);
      return () => clearInterval(id);
    }
  }, []);
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={
            description ||
            'Jenkins – an open source automation server which enables developers around the world to reliably build, test, and deploy their software'
          }
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/bower/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/jenkins.css" />
        <link rel="stylesheet" href="/css/copy-to-clipboard.css" />
        <link rel="stylesheet" href="/stylesheets/styles.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <style>{`
          .security-fonts, .security-fonts * {
            overflow-wrap: anywhere;
            word-break: break-word;
            white-space: normal;
          }
          .security-fonts {
            max-width: 100%;
            overflow-x: hidden;
          }
          .security-plugin-list {
            display: inline;
            white-space: normal;
            overflow-wrap: anywhere;
            word-break: break-word;
          }
          .security-plugin-list a {
            white-space: normal;
            padding: 0 2px;
          }
        `}</style>
      </Helmet>

      <script src="/assets/bower/jquery/jquery.min.js"></script>
      <script src="/js/copy-to-clipboard.js"></script>

      <div className="security-fonts">
        {children}
      </div>

      <script src="/assets/bower/anchor-js/anchor.min.js"></script>
      <script src="/assets/bower/@popperjs/core/umd/popper.min.js"></script>
      <script src="/assets/bower/bootstrap/js/bootstrap.min.js"></script>
    </>
  );
}
