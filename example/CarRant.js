import React from 'react'
import PropTypes from 'prop-types'

import { useTranslate } from '../lib'

const CarRant = ({ nrCars }) => {
  const t = useTranslate()
  return <p>{t('num_cars', { smart_count: nrCars })}</p>
}

CarRant.propTypes = {
  nrCars: PropTypes.number.isRequired,
  t: PropTypes.func,
}

export default CarRant
