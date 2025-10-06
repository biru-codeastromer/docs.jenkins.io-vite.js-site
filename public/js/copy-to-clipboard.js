
      (function(){
        document.addEventListener('click', async (e) => {
          const btn = e.target.closest('[data-copy]');
          if (!btn) return;
          try {
            await navigator.clipboard.writeText(btn.getAttribute('data-copy'));
            btn.setAttribute('data-tooltip', 'Copied!');
            setTimeout(()=>btn.removeAttribute('data-tooltip'), 1200);
          } catch {}
        });
      })();
    