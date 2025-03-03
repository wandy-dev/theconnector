import { defineMessages, useIntl } from 'react-intl';

import LockIcon from '@/material-icons/400-24px/lock.svg?react';
import PublicIcon from '@/material-icons/400-24px/public.svg?react';
import QuietTimeIcon from '@/material-icons/400-24px/quiet_time.svg?react';
import type { StatusFederation } from 'mastodon/models/status';

import { Icon } from './icon';

const messages = defineMessages({
  federation_full_short: {
    id: 'federation.federation_full.short',
    defaultMessage: 'Fediverse',
  },
  federation_local_short: {
    id: 'federation.federation_local.short',
    defaultMessage: 'Home server',
  },
  federation_limited_short: {
    id: 'federation.federation_limited.short',
    defaultMessage: 'Wider Community',
  },
});

export const FederationIcon: React.FC<{ federation: StatusFederation }> = ({
  federation,
}) => {
  const intl = useIntl();

  const federationIconInfo = {
    federation_full: {
      icon: 'globe',
      iconComponent: PublicIcon,
      text: intl.formatMessage(messages.federation_full_short),
    },
    federation_limited: {
      icon: 'unlock',
      iconComponent: QuietTimeIcon,
      text: intl.formatMessage(messages.federation_limited_short),
    },
    federation_local: {
      icon: 'lock',
      iconComponent: LockIcon,
      text: intl.formatMessage(messages.federation_local_short),
    },
  };

  const federationIcon = federationIconInfo[federation];

  return (
    <Icon
      id={federationIcon.icon}
      icon={federationIcon.iconComponent}
      title={federationIcon.text}
    />
  );
};
