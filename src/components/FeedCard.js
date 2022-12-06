import { MoreVert, Share } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { red } from '@mui/material/colors';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export const FeedCard = ({ feed }) => {
    return (
        <Card sx={{ maxWidth: "95%", margin: 3}}>
            <CardHeader
                avatar={

                    <Avatar sx={{ bgcolor: red[500] }} aria-label="Nature">
                        R
                    </Avatar>

                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={feed.title}
                subheader={feed.subTitle}
            />
            <CardMedia
                component="img"
                height="10%"
                image={feed.imageUrl}
                alt={feed.imageAlt}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {feed.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="error" />
                </IconButton>

                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}