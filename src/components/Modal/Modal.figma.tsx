import figma from '@figma/code-connect';
import { Modal } from './Modal';

// Figma "Modal" — node 9:603
figma.connect(Modal, '<DS_FILE>?node-id=9-603', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Body'),
  },
  example: ({ title, description }) => (
    <Modal open title={title} description={description} onConfirm={() => {}} onClose={() => {}} />
  ),
});
