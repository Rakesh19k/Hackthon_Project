import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import Popover from '@material-ui/core/Popover';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';
import { useHistory } from 'react-router';

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
    footer: {
        width: "100%",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginTop: theme.spacing(3),
    },
    copyright: {
        marginTop: theme.spacing(6),
        color: "white"
    },
    popup: {
        width: "65%",
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    close: {
        cursor: "pointer",
    }

}));

function Home() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);
    const [title, setTitle] = useState();
    const [text, setText] = useState();
    const history = useHistory()

    const handleClick = () => {
        setAnchorEl(true);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };

    const submitHandler = (e) => {
        e.preventDefault()
        const blogs = {
            title: title,
            text: text
        }
        axios.post("https://somesh-blog-app.herokuapp.com/blogs", blogs)
        .then((res) => {
            console.log(res)
        })
    }


    const handleblog = () => {
        history.push("/blog")
    }


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Home
                        </Typography>
                        <Button color="inherit" onClick={handleblog}>Blog</Button>
                        <Button color="inherit" onClick={handleClick}>Add</Button>
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

                <div id="demo" className="carousel slide mt-5 container-fluid" data-ride="carousel">

                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Los Angeles" width="800" height="400" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZeLx9oSQBEGCf4uWV13-j8opLzZydGDSDg&usqp=CAU" alt="Chicago" width="800" height="400" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkfQ-PUHOe-Buw9DbNsbIwiz2w9-6rHariw&usqp=CAU" alt="New York" width="800" height="400" />
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>

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
        </>
    );
}


export default Home;