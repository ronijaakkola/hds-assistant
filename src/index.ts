import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

import { noDefaultGroups } from './rules/no-default-groups'
import { noCopyLabels } from './rules/no-copy-labels'

const assistant: AssistantPackage = async () => {
  return {
    name: 'hds-assistant',
    rules: [noDefaultGroups, noCopyLabels],
    config: {
      rules: {
        'hds-assistant/no-default-groups': { active: true },
        'hds-assistant/no-copy-labels': { active: true },
      },
    },
  }
}

export default assistant
