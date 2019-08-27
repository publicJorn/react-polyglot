import React from 'react'
import PropTypes from 'prop-types'
import { translate } from '../lib'

const Greeter = ({ name, t }) => <h3>{t('hello_name', { name })}</h3>

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
  t: PropTypes.func,
}

export default translate(Greeter)
