import figma from '@figma/code-connect';
import { NotificationCenter } from './NotificationCenter';

// Figma "Notification Center" — node 75:230
figma.connect(NotificationCenter, '<DS_FILE>?node-id=75-230', {
  example: () => (
    <NotificationCenter
      onMarkAllRead={() => {}}
      notifications={[
        {
          id: '1',
          title: 'Deployment succeeded',
          description: 'v1.5.0 is live.',
          time: '2m',
          unread: true,
        },
        {
          id: '2',
          title: 'New comment on Button',
          description: 'Sam: "Can we add a ghost variant?"',
          time: '1h',
          unread: true,
        },
      ]}
    />
  ),
});
