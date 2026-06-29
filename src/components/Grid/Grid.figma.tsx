import figma from '@figma/code-connect';
import { Grid } from './Grid';

// Figma "Grid" — node 65:288
figma.connect(Grid, '<DS_FILE>?node-id=65-288', {
  example: () => (
    <Grid columns={3} gap={16}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Grid>
  ),
});
