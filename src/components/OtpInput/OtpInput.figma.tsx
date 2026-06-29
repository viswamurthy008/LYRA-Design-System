import figma from '@figma/code-connect';
import { OtpInput } from './OtpInput';

// Figma "OTP Input" — node 65:332
figma.connect(OtpInput, '<DS_FILE>?node-id=65-332', {
  example: () => <OtpInput length={6} value="42" />,
});
