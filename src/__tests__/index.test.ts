import { resolve } from 'path'
import { testRuleInAssistant } from '@sketch-hq/sketch-assistant-utils'
import { RuleConfig } from '@sketch-hq/sketch-assistant-types'

import Assistant from '..'

const testCoreRule = async (
  fixture: string, 
  ruleName: string, 
  config: RuleConfig = {active: true},
  ) => await testRuleInAssistant(
    resolve(__dirname, fixture),
    Assistant,
    `@sketch-hq/sketch-core-assistant/${ruleName}`,
    config
  )

describe('CORE: layer-styles-no-dirty', () => {
  test('no violations for no layers with dirty styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/valid-no-dirty-layers.sketch'),
      'layer-styles-no-dirty',
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('finds violations for no layers with dirty styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/violation-no-dirty-layers.sketch'),
      'layer-styles-no-dirty',
    )
    expect(violations).toHaveLength(1)
    expect(ruleErrors).toHaveLength(0)
  })
})

describe('CORE: fills-no-disabled', () => {
  test('no violations for fills no disabled', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/valid-styles-no-disabled.sketch'),
      'fills-no-disabled',
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('finds violations for fills no disabled', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/violation-styles-no-disabled.sketch'),
      'fills-no-disabled',
    )
    expect(violations).toHaveLength(1)
    expect(ruleErrors).toHaveLength(0)
  })
})

describe('CORE: borders-no-disabled', () => {
  test('no violations for borders no disabled', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/valid-styles-no-disabled.sketch'),
      'borders-no-disabled',
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('finds violations for borders no disabled', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/violation-styles-no-disabled.sketch'),
      'borders-no-disabled',
    )
    expect(violations).toHaveLength(1)
    expect(ruleErrors).toHaveLength(0)
  })
})

describe('CORE: library-layer-styles-allowed-libraries', () => {
  test('no violations found when using correct library styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/library-layer-style.sketch'),
      'library-layer-styles-allowed-libraries',
      {
        active: true,
        libraries: ['HDS Colour'],
      },
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('no violations found when using local library styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/local-layer-style.sketch'),
      'library-layer-styles-allowed-libraries',
      {
        active: true,
        libraries: ['HDS Colour'],
      },
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('finds violations when using not authorized library styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/violation-non-authorized-library-styles.sketch'),
      'library-layer-styles-allowed-libraries',
      {
        active: true,
        libraries: ['HDS Colour'],
      },
    )
    expect(violations).toHaveLength(1)
    expect(ruleErrors).toHaveLength(0)
  })
})

describe('CORE: library-text-styles-allowed-libraries', () => {
  test('no violations found when using correct library typography styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/library-layer-style.sketch'),
      'library-text-styles-allowed-libraries',
      {
        active: true,
        libraries: ['HDS Typography'],
      },
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('no violations found when using local library typography styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/local-layer-style.sketch'),
      'library-text-styles-allowed-libraries',
      {
        active: true,
        libraries: ['HDS Typography'],
      },
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('finds violations when using non-authorized library typography styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/violation-non-authorized-library-styles.sketch'),
      'library-text-styles-allowed-libraries',
      {
        active: true,
        libraries: ['HDS Typography'],
      },
    )
    expect(violations).toHaveLength(1)
    expect(ruleErrors).toHaveLength(0)
  })
})

describe('CORE: layer-styles-prefer-shared', () => {
  test('no violations found for using local layer styles', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/library-layer-style.sketch'),
      'layer-styles-prefer-shared',
      {
        active: true,
        maxIdentical: 1,
      },
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('finds violations when using styles that are not shared', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/identical-styles.sketch'),
      'layer-styles-prefer-shared',
      {
        active: true,
        maxIdentical: 1,
      },
    )
    expect(violations).toHaveLength(1)
    expect(ruleErrors).toHaveLength(0)
  })
})

describe('CORE: layers-subpixel-positioning', () => {
  test('no violations found for subpixel positioning', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/valid-subpixel-positioning.sketch'),
      'layers-subpixel-positioning',
      {
        active: true,
        scaleFactors: ['@1x'],
      },
    )
    expect(violations).toHaveLength(0)
    expect(ruleErrors).toHaveLength(0)
  })

  test('finds violations for subpixel positioning', async () => {
    const { violations, ruleErrors } = await testCoreRule (
      resolve(__dirname, './sketch-files/violation-subpixel-positioning.sketch'),
      'layers-subpixel-positioning',
      {
        active: true,
        scaleFactors: ['@1x'],
      },
    )
    expect(violations).toHaveLength(1)
    expect(ruleErrors).toHaveLength(0)
  })
})

