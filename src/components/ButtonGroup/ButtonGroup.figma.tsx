import figma from '@figma/code-connect';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

// Figma "Button Group" — node 28:487
figma.connect(ButtonGroup, '<DS_FILE>?node-id=28-487', {
  example: () => (
    <ButtonGroup>
      <Button variant="secondary">One</Button>
      <Button variant="secondary">Two</Button>
    </ButtonGroup>
  ),
});
