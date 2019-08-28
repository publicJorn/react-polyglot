import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Polyglot from 'node-polyglot'
import I18nContext from './i18n-context'

// Provider root component
export default class I18n extends Component {
  constructor(props) {
    super(props)

    this._polyglot = new Polyglot({
      locale: props.locale,
      phrases: props.messages,
    })

    this.translate = this.translate.bind(this)
  }

  translate(...args) {
    const { highlight } = this.props
    const str = this._polyglot.t.call(this._polyglot, ...args)

    if (!highlight) return str

    return <span style={{ backgroundColor: highlight }}>{str}</span>
  }

  render() {
    const { forceReInit, locale, messages, children } = this.props

    if (forceReInit || this._polyglot.locale() !== locale) {
      this._polyglot.locale(locale)
      this._polyglot.replace(messages)
    }

    return (
      <I18nContext.Provider value={this.translate}>
        {React.Children.only(children)}
      </I18nContext.Provider>
    )
  }
}

I18n.propTypes = {
  forceReInit: PropTypes.bool,
  highlight: PropTypes.string,
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

I18n.defaultProps = {
  forceReInit: false,
  highlight: '',
}
