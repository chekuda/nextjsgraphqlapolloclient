import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './SimpleCard.module.css'

export const SimpleCard = ({
    title = 'Title',
    subtitle = 'subtitle',
    description = 'description',
    CustomButton,
    buttonText = 'Saber mas',
    onClick= () => {},
    variant = 'outlined',
    classes = {},
    cardMedia,
  }) => {
  return (
    <Card className={classes} variant={variant}>
      { cardMedia &&
        <CardMedia
          className={styles.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      }
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
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