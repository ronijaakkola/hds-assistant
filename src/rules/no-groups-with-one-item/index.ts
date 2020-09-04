import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const noGroupsWithOneItem: RuleDefinition = {
    rule: async (context) => {
        const { utils } = context
        for (const group of utils.objects.group) {
            const hasOneChild = group.layers.length === 1
            if (hasOneChild) {
                utils.report("Group only has a one child.", group)
            }
        }
    },
    name: 'hds-assistant/no-groups-with-one-item',
    title: 'Avoid groups that have only one another group in them',
    description:
        'Reports a violation when there are groups with only one other item in them.',
}