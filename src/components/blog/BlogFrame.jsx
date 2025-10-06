import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogFrame({ title, description, children }) {
  useEffect(() => {
    let tries = 0;
    const run = () => {
      if (window.anchors) {
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
        <title>{title || 'The Jenkins Blog'}</title>
        <meta
          name="description"
          content={description || 'Posts from the Jenkins project'}
        />
        <link rel="stylesheet" href="/assets/bower/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/jenkins.css" />
        <link rel="stylesheet" href="/css/copy-to-clipboard.css" />
        <link rel="stylesheet" href="/stylesheets/styles.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <style>{`
          .app-button img{width:1.25rem;height:1.25rem;display:block}

          .app-app-bar__controls .app-button img{ filter:none; }

          @media (prefers-color-scheme: dark){
            .app-app-bar__controls .app-button img{ filter:brightness(0) invert(1); }
          }

          :root[data-theme="dark"] .app-app-bar__controls .app-button img,
          html[data-theme="dark"] .app-app-bar__controls .app-button img,
          body[data-theme="dark"] .app-app-bar__controls .app-button img,
          .theme-dark .app-app-bar__controls .app-button img{
            filter:brightness(0) invert(1);
          }
          :root[data-theme="light"] .app-app-bar__controls .app-button img,
          html[data-theme="light"] .app-app-bar__controls .app-button img,
          body[data-theme="light"] .app-app-bar__controls .app-button img,
          .theme-light .app-app-bar__controls .app-button img{
            filter:none;
          }

          .app-app-bar__controls .app-button:hover img{ opacity:1; }

          .app-avatar__image,
          .app-card__preview img,
          .app-author img {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            max-width: 100%;
            height: auto;
          }

          .app-avatar__image.is-loaded,
          .app-card__preview img.is-loaded,
          .app-author img.is-loaded {
            opacity: 1;
          }

          .app-avatar {
            display: inline-block;
            overflow: hidden;
          }
          
          .app-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}</style>
      </Helmet>

      <script src="/assets/bower/jquery/jquery.min.js"></script>
      <script src="/js/copy-to-clipboard.js"></script>

      <div className="app-container app-blog-page">
        {children}
      </div>

      <script src="/assets/bower/anchor-js/anchor.min.js"></script>
      <script src="/assets/bower/@popperjs/core/umd/popper.min.js"></script>
      <script src="/assets/bower/bootstrap/js/bootstrap.min.js"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            function mark(img){ 
              try{ 
                img.style.opacity = 1; 
                img.classList.add('is-loaded'); 
              }catch(e){}
            }
            
            function watch(img){
              if (!img) return;
              
              img.style.opacity = '0';
              
              if (img.complete) { 
                mark(img); 
                return; 
              }
              
              img.addEventListener('load', function h(){ 
                mark(img); 
                img.removeEventListener('load', h); 
              }, { once:true });
              
              img.addEventListener('error', function h() {
                setTimeout(() => { mark(img); }, 100);
                img.removeEventListener('error', h);
              }, { once: true });
            }
            
            document.addEventListener('DOMContentLoaded', function() {
              document.querySelectorAll('img.app-avatar__image, .app-card__preview img, .app-author img').forEach(watch);
            });
            
            document.addEventListener('load', function(e){
              var t = e.target;
              if (t && t.tagName === 'IMG' && (
                t.classList.contains('app-avatar__image') || 
                (t.closest && (t.closest('.app-card__preview') || t.closest('.app-author')))
              )){
                watch(t);
              }
            }, true);
          })();
        `
        }}
      />
    </>
  );
}