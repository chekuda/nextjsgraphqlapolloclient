import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './SimpleCard.styles.js'
import jsxclassnames from 'jsxclassnames'

export const SimpleCard = ({
    title = 'Title',
    subtitle = 'subtitle',
    description = 'description',
    CustomButton,
    buttonText = 'Saber mas',
    onClick= () => {},
    variant = 'outlined',
    parentClasses = {},
    cardMedia,
  }) => {
    const classes = styles()
  return (
    <Card className={jsxclassnames(parentClasses)} variant={variant}>
      { cardMedia &&
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      }
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {subtitle}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        { CustomButton || <Button size="small" onClick={onClick}>{buttonText}</Button>}
      </CardActions>
    </Card>
  )
}

SimpleCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  CustomButton: PropTypes.node,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  parentClasses: PropTypes.object,
  cardMedia: PropTypes.bool,
}
