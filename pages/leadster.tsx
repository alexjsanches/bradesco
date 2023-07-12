import { useEffect } from 'react';

const NeuroLeadScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('type', 'text/javascript');
    script.setAttribute(
      'src',
      'https://cdn.leadster.com.br/neurolead/neurolead.min.js'
    );
    (window as any).neuroleadId = 'UjIAV3J6pjKRvhte95DxXDQEC';

    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return null;
};

export default NeuroLeadScript;
