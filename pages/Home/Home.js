import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import data from '../../data/posts.json'

import styles from './Home.module.css'

export const Home = () => {
  return <Grid container spacing={2} justify='center'>
    { data.map(({ img, title, description }, index) => (
        <Card key={index} className={styles.card} >
        <CardActionArea>
          <CardMedia
            className={styles.cardMedia}
            image={img}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={styles.description}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="default">
            Share
          </Button>
          <Button size="small" color="default">
            Learn More
          </Button>
        </CardActions>
      </Card>
    ))}
  </Grid>
}
