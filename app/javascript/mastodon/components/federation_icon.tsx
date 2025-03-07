import { defineMessages, useIntl } from 'react-intl';

import LockIcon from '@/material-icons/400-24px/lock.svg?react';
import PublicIcon from '@/material-icons/400-24px/public.svg?react';
import QuietTimeIcon from '@/material-icons/400-24px/quiet_time.svg?react';
import type { StatusFederation } from 'mastodon/models/status';

import { Icon } from './icon';

const messages = defineMessages({
  full_short: {
    id: 'federation.full.short',
    defaultMessage: 'Fediverse',
  },
  local_short: {
    id: 'federation.local.short',
    defaultMessage: 'Home server',
  },
  limited_short: {
    id: 'federation.limited.short',
    defaultMessage: 'Wider Community',
  },
});

export const FederationIcon: React.FC<{ federation: StatusFederation }> = ({
  federation,
}) => {
  const intl = useIntl();

  const federationIconInfo = {
    full: {
      icon: 'globe',
      iconComponent: PublicIcon,
      text: intl.formatMessage(messages.full_short),
    },
    limited: {
      icon: 'unlock',
      iconComponent: QuietTimeIcon,
      text: intl.formatMessage(messages.limited_short),
    },
    local: {
      icon: 'lock',
      iconComponent: LockIcon,
      text: intl.formatMessage(messages.local_short),
    },
    null: {
      icon: 'federated',
      iconComponent: PublicIcon,
      text: intl.formatMessage(messages.full_short),
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
