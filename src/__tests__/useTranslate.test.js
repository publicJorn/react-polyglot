import React from 'react'
import TestRenderer from 'react-test-renderer'

import I18n from '../i18n'
import useTranslate from '../useTranslate'

// eslint-disable-next-line
const Child = ({ n }) => {
  const t = useTranslate()
  return <div>{t('test', 123)}</div>
}

const createRenderer = () =>
  TestRenderer.create(
    <I18n
      locale="en"
      messages={{ test: 'test %{smart_count} |||| testing %{smart_count}' }}
    >
      <Child n="123" />
    </I18n>
  )

describe('getTranslate', () => {
  it('should show expected text', () => {
    const renderer = createRenderer()
    expect(renderer.toJSON().children[0]).toEqual('testing 123')
  })
})
