import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const noDefaultGroups: RuleDefinition = {
    rule: async (context) => {
        const { utils } = context
        for (const group of utils.objects.group) {
            const name = group.name;
            if (name.includes('Group')) {
                utils.report(`Layer “${group.name}” has a default name`, group)
            }
        }
    },
    name: 'hds-assistant/no-default-groups',
    title: 'There should not be groups without set name',
    description:
        'Reports a violation when there are groups with default name',
}