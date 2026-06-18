import figma from '@figma/code-connect';
import { Navbar } from './Navbar';

// Figma "Top Navbar" — node 28:511
figma.connect(Navbar, '<DS_FILE>?node-id=28-511', {
  example: () => (
    <Navbar
      brand="Acme"
      activeId="home"
      items={[
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
      ]}
    />
  ),
});
