import { Info } from "@mui/icons-material"
import { Avatar, AvatarGroup, Box, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"

const imageListData = [
    { id: 2, title: "Gdynia", author: "@usurpe_y", url: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" },
    { id: 3, title: "Austria", author: "@qeruytT", url: "https://images.unsplash.com/photo-1574873346832-76340f40b01e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
    { id: 12, title: "Murdiera", author: "@frubj00", url: "https://images.unsplash.com/photo-1566795039464-714e638a0582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxuYXR1cmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
]

export const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: "block" } }}>
            <Box position="fixed" width={360}>
                <Typography variant="h6" fontWeight={100} mt={1} mb={1}>Online Friends</Typography>
                <AvatarGroup max={8}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/6.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/7.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/8.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/9.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/10.jpg" />
                </AvatarGroup>


                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} gap={8} rowHeight={170}>
                    {
                        imageListData.map((list) => (
                            <ImageListItem key={list.id}>
                                <img src={list.url} alt={list.id} loading='lazy' />
                                <ImageListItemBar
                                    title={list.title}
                                    subtitle={list.author}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${list.title}`}
                                        >
                                            <Info />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}
