import figma from '@figma/code-connect';
import { Container } from './Container';

// Figma "Container" — node 65:301
figma.connect(Container, '<DS_FILE>?node-id=65-301', {
  example: () => (
    <Container maxWidth={1120}>
      <div>Page content</div>
    </Container>
  ),
});
