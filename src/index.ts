import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

// Import other assistants
import CoreAssistant from '@sketch-hq/sketch-core-assistant'

import { noGroupsWithOneItem } from './rules/no-groups-with-one-item'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'hds-assistant',
      rules: [noGroupsWithOneItem],
      config: {
        rules: {
          /* STYLES */
          /* -------------------------------------------------------------*/
          '@sketch-hq/sketch-core-assistant/layer-styles-no-dirty': {
            active: true,
            ruleTitle: 'Styles: Respect the shared layer styles. Don’t customise or brake the linking to original style.'
          },
          '@sketch-hq/sketch-core-assistant/text-styles-no-dirty': {
            active: true,
            ruleTitle: 'Styles: Respect the shared text styles. Don’t customise or brake the linking to original style.'
          },
          '@sketch-hq/sketch-core-assistant/fills-no-disabled': {
            active: true,
            ruleTitle: 'Styles: Remove disabled fills'
          },
          '@sketch-hq/sketch-core-assistant/borders-no-disabled': {
            active: true,
            ruleTitle: 'Styles: Remove disabled borders'
          },
          /* TEMPOARILY DISABLED. THESE DO NOT WORK PROPERLY WITH ABSTRACT!
          '@sketch-hq/sketch-core-assistant/library-layer-styles-allowed-libraries': {
            active: true,
            libraries: ["HDS Color"],
            ruleTitle: 'Styles: Prefer using styles only from HDS Colour library'
          },
          '@sketch-hq/sketch-core-assistant/library-text-styles-allowed-libraries': {
            active: true,
            libraries: ["HDS Typography"],
            ruleTitle: 'Styles: Prefer using styles only from HDS Typography library'
          },
          */
          '@sketch-hq/sketch-core-assistant/layer-styles-prefer-shared': {
            active: true,
            maxIdentical: 1,
            ruleTitle: 'Styles: You have identical non-shared layer styles. All styles used in HDS components should be found in HDS libraries.'
          },
          '@sketch-hq/sketch-core-assistant/text-styles-prefer-shared': {
            active: true,
            maxIdentical: 1,
            ruleTitle: 'Styles: You have identical non-shared text styles. All typography used in HDS components should be found in HDS libraries.'
          },

          /* LAYOUT */
          /* -------------------------------------------------------------*/
          '@sketch-hq/sketch-core-assistant/layers-subpixel-positioning': {
            active: true,
            scaleFactors: ['@1x'],
            ruleTitle: 'Align elements and artboards to pixel grid'
          },
          // TODO: Check usage of HDS Spacing tokens

          /* NAMING */
          /* -------------------------------------------------------------*/

          // TODO: Combine name patterns into one rule for cleaner list
          '@sketch-hq/sketch-core-assistant/name-pattern-artboards': {
            active: true,
            allowed: [],
            forbidden: ['^Artboard', 'Artboard Copy', '[Cc][Oo][Pp][Yy]'],
            ruleTitle: 'Naming: Give artboards names that state their purpose or content',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-pages': {
            active: true,
            allowed: [],
            forbidden: ['^Page', 'Page Copy', '[Cc][Oo][Pp][Yy]'],
            ruleTitle: 'Naming: Give pages names that state their purpose or content',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-groups': {
            active: true,
            allowed: [],
            forbidden: ['^Group', 'Group Copy', '[Cc][Oo][Pp][Yy]'],
            ruleTitle: 'Naming: Give groups names that state their purpose or content',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-shapes': {
            active: true,
            allowed: [],
            forbidden: ['^Oval', '^Rectangle', '^Star', '^Triangle', '^Line', '^Polygon', '[Cc][Oo][Pp][Yy]'],
            ruleTitle: 'Naming: Give shapes names that state their purpose or content',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-symbols': {
            active: true,
            // TODO: Add check for HDS naming pattern
            allowed: [],
            forbidden: ['[Cc][Oo][Pp][Yy]'],
            ruleTitle: 'Naming: Give symbols names that state their purpose or content. Use forward slash separator.',
          },

          /* LAYERS AND GROUPS */
          /* -------------------------------------------------------------*/
          '@sketch-hq/sketch-core-assistant/groups-no-empty': {
            active: true,
            ruleTitle: 'Layers and groups: Delete empty groups'
          },
          '@sketch-hq/sketch-core-assistant/layers-no-hidden': {
            active: true,
            ruleTitle: 'Layers and groups: Delete hidden groups and layers'
          },
          '@sketch-hq/sketch-core-assistant/layers-no-loose': {
            active: true,
            ruleTitle: 'Layers and groups: Delete loose layers or groups that are outside artboards'
          },
          '@sketch-hq/sketch-core-assistant/groups-no-redundant': {
            active: true,
            ruleTitle: 'Layers and groups: Ungroup unnecessary groups'
          },
          'hds-assistant/no-groups-with-one-item': {
            active: true,
            ruleTitle: 'Layers and groups: Avoid groups that have only one another group in them'
          },
        },
      },
    }
  }
]

export default assistant
