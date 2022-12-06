import { Add, CameraAlt, PersonAdd, Send, VideoCameraBack } from "@mui/icons-material"
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material"
import { useState } from "react";
import { StyledBadge } from "./Navbar";
import TagFacesIcon from '@mui/icons-material/TagFaces';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    marginBottom: 20
}));

export const AddFeed = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Tooltip title="Add Feed" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50%)", md: 20 } }}>
                <Fab color="primary" aria-label="add" size="large" onClick={handleOpen}>
                    <Add />
                </Fab>
            </Tooltip>


            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box width={430} height={320} bgcolor={"background.default"} color={"text.primary"}borderRadius={5} padding={3}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color="grey" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot">
                            <Avatar sx={{ width: 25, height: 25 }}
                                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
                        </StyledBadge>
                        <Typography variant="span">Fayaz</Typography>
                    </UserBox>

                    <TextField
                        id="standard-multiline-static"
                        sx={{ width: "100%" }}
                        multiline
                        rows={3}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <TagFacesIcon color="primary" />
                        <CameraAlt color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>

                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{width:"20%"}}><Send/> </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}