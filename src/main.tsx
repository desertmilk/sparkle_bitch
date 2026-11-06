import { render } from 'preact';
import { useLayoutEffect } from 'preact/hooks';
import '../css/style.css';
import '../fonts/fonts.css';
import './engine/util';
import './engine/anim';
import './engine/presets';
import './engine/analyze';
import './engine/sparkles';
import './engine/glitter';
import './engine/finishes';
import './engine/liminal';
import './engine/render';
import './engine/text';
import './engine/gif-encode';
import './engine/gif-decode';
import './engine/media';
import './engine/export';
import './engine/fontstore';
import { initializeApp } from './engine/main';

function App() {
  const template = document.getElementById('legacy-app');
  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error('The application template is missing');
  }

  useLayoutEffect(() => {
    initializeApp();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: template.innerHTML }} />;
}

const root = document.getElementById('root');
if (!root) throw new Error('The Preact root element is missing');
render(<App />, root);
