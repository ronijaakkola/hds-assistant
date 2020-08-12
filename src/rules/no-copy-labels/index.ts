import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const noCopyLabels: RuleDefinition = {
    rule: async (context) => {
        const { utils } = context
        for (const artboard of utils.objects.artboard) {
            for (const layer of artboard.layers) {
                const name = layer.name;
                if (name.toLowerCase().includes('copy')) {
                    utils.report(`Layer “${layer.name}” has a copied label`, layer)
                }
            }
        }

        for (const text of utils.objects.text) {
            const name = text.name;
            if (name.toLowerCase().includes('copy')) {
                utils.report(`Text “${text.name}” has a copied label`, text)
            }
        }

        for (const symbol of utils.objects.symbolInstance) {
            const name = symbol.name;
            if (name.toLowerCase().includes('copy')) {
                utils.report(`Symbol instance “${symbol.name}” has a copied label`, symbol)
            }
        }
    },
    name: 'hds-assistant/no-copy-labels',
    title: 'There should not be layers with a copied label',
    description:
        'Reports a violation when there are layers with a copied label',
}