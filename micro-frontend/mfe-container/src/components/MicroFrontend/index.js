import React, { useEffect } from 'react';

export default function MicroFrontend({...props}) {
  useEffect(() => {
    const { name, host, document } = props;
    const scriptId = `micro-frontend-script-${name}`;

    function renderMicroFrontend() {
      const { name, window, history } = props;    
      window[`render${name}`](`${name}-container`, history);
    }

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
      });

    console.log('mounted')

    return () => {
      window[`unmount${name}`](`${name}-container`);
      console.log('unmounted')
    }
  }, []);

  return (
    <main id={`${props.name}-container`} />
  );
};

MicroFrontend.defaultProps = {
  document,
  window,
}


