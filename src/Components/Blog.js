import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddIcon from '@material-ui/icons/Add';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Link } from '@material-ui/core';

import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import CancelIcon from '@material-ui/icons/Cancel';
import Popover from '@material-ui/core/Popover';
import TextField from "@material-ui/core/TextField"
import { useHistory } from 'react-router';
import axios from 'axios';


const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    card: {
        width: "100%",
        maxWidth: 345,
        marginTop: 20,
        marginLeft: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    footer: {
        width: "100%",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginTop: theme.spacing(40.7),
    },
    copyright: {
        marginTop: theme.spacing(6),
        color: "white"
    },
    popup: {
        width: "65%",
    },
    close: {
        cursor: "pointer",
    }
}));







function Blog() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);
    const [title, setTitle] = useState();
    const [text, setText] = useState();

    const history = useHistory()


    // useEffect(() => {
    //    axios.get("https://somesh-blog-app.herokuapp.com/blogs") 
    //    .then((res) => {
    //         console.log(res, "blog data")
    //    })
    // }, [])

    
    const handleClick = () => {
        setAnchorEl(true);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };

    const submitHandler = (e) => {
        e.preventDefault()
        const userLogin = {
            title: title,
            text: text
        }
        axios.post("https://somesh-blog-app.herokuapp.com/blogs", userLogin)
        .then((res) => {
            console.log(res)
        })
        console.log(userLogin)
    }


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const logout = () => {
        history.push("/login")
    } 





    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Grid item xs={12} >
                        <Button color="inherit" onClick={handleClick} ><AddIcon /></Button>

                        <Button color="primary" style={{ float: "right" }} onClick={logout}>LogOut</Button>
                    </Grid>
                </Toolbar>
            </AppBar>

            <div>
                    <Popover
                        className={classes.popup}
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 130, left: 675 }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <CancelIcon onClick={handleClose} className={classes.close} />
                        <Typography variant="h6" className="text-center">
                            Blog
                        </Typography>
                        <Typography>
                            <Card>
                                <CardContent>
                                    <form className={classes.form} noValidate onSubmit={submitHandler}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            autoComplete="off"
                                            name="title"
                                            label="Title"
                                            type="text"
                                            id="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            autoComplete="off"
                                            fullWidth
                                            id="text"
                                            label="Description"
                                            name="text"
                                            type="text"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                        />

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}>
                                            Post
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Typography>
                    </Popover>
                </div>

            <Grid item xs={12}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Description
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Grid>
                        <Grid style={{ display: "flex", float: "left" }}>
                            <Button color="inherit"><ThumbUpIcon /></Button>
                            <Button color="inherit"><ThumbDownIcon /></Button>
                        </Grid>
                        <Grid style={{ display: "flex", float: "right" }}>
                            <Button color="secondary">Edit</Button>
                            <Button color="inherit">Delete</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

            <div className={classes.footer}>
                <BottomNavigation className={classes.footer} >
                    <BottomNavigationAction label="Github" value="Github" href="#" target="_blank" icon={<GitHubIcon />} />
                    <BottomNavigationAction label="Facebook" value="Facebook" href="#" target="_blank" icon={<FacebookIcon />} />
                    <BottomNavigationAction label="LinkedIn" value="LinkedIn" href="#" target="_blank" icon={<LinkedInIcon />} />
                    <BottomNavigationAction label="Instagram" value="Instagram" href="#" target="_blank" icon={<InstagramIcon />} />

                </BottomNavigation>
                <Copyright className={classes.copyright} />
            </div>
        </div>
    );
}


export default Blog;