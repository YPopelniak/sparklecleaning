import React, { useEffect, useState } from 'react';
import './Customers.css'
import Box from "@mui/material/Box";
import { FormControl, Grid, Pagination, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { sendMessage } from "../../api/bookSchedule.ts";
import { MuiTelInput } from "mui-tel-input";
import { enqueueSnackbar } from "notistack";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function sortReviewsByRatingDesc(items) {
    return [...items].sort((a, b) => {
        const ra = Number(a.Rating) || 0;
        const rb = Number(b.Rating) || 0;
        if (rb !== ra) {
            return rb - ra;
        }
        const ida = Number(a.id);
        const idb = Number(b.id);
        if (!Number.isNaN(ida) && !Number.isNaN(idb) && ida !== idb) {
            return idb - ida;
        }
        return 0;
    });
}

const service_list = [
    {
        value: 1,
        label: 'Regular Cleaning',
    },
    {
        value: 2,
        label: 'After Repair',
    },
    {
        value: 3,
        label: 'Office/ Commercial',
    },
    {
        value: 4,
        label: 'Move-in/ Move-out',
    },
    {
        value: 5,
        label: 'Deep Cleaning',
    },
    {
        value: 6,
        label: 'Basic Cleaning',
    },
    {
        value: 7,
        label: 'Pets and a Clean Home',
    },
    {
        value: 8,
        label: 'Holiday Cleaning',
    },
];


function Customers() {


    const [costomers, setCostomers] = useState([]);
    const [allPage, setAllPage] = useState(Math.ceil(1))
    const [currentPage, setCurrentPage] = useState(1)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('5');
    const [nameDirty, setNameDirty] = useState(false)
    const [commentDirty, setCommentDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [nameError, setNameError] = useState('Name cannot be empty')
    const [phoneError, setPhoneError] = useState('Phone cannot be empty')
    const [commentError, setCommentError] = useState('22 cannot be empty')
    const [formValid, setFormValid] = useState(true)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);


    }

    useEffect(() => {
        setName('')
        setNameError('Name cannot be empty')
        setPhone('')
        setPhoneError('Phone is incorrect')
        setComment('')
        setCommentError('Comment cannot be empty')
        setFormValid(true)
    }, [open]);


    useEffect(() => {
        if (nameError || phoneError || commentError) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [nameError, phoneError, commentError, name, phone, comment])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
            case 'comment':
                setCommentDirty(true)
                break
            default:
            // do nothing
        }

    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if (!e.target.value) {
            setNameError('Name cannot be empty')
        } else {
            setNameError('')
        }

    }
    const phoneHandler = (e) => {
        setPhone(e)
        if (e.length < 13) {
            setPhoneError('Phone is incorrect')
        } else {
            setPhoneError('')
        }

    }
    const serviceHandler = (e) => {
        setService(e.target.value)

    }
    const commentHandler = (e) => {
        setComment(e.target.value)
        if (!e.target.value) {
            setCommentError('Comment cannot be empty')
        } else {
            setCommentError('')
        }

    }
    const ratingHandler = (e) => {
        setRating(e.target.value)
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#003156',
            },

        },
    });

    useEffect(() => {

        setTimeout(
            () => {
                let data = axios.get('https://chicago-sparkle-elite-cleaning-default-rtdb.firebaseio.com/comments.json')
                data.then(res => {
                    const list = res.data ? Object.values(res.data) : [];
                    const sorted = sortReviewsByRatingDesc(list);
                    setCostomers(sorted);
                    setAllPage(Math.ceil(sorted.length / 3));
                })

            }, 1000);

    }

        , [])


    const handleSubmit = async (values) => {
        values.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: null,
                Name: name,
                Offering: service,
                Massage: comment,
                Rating: rating,
                Phone: phone,
            })
        }
        const res = await fetch('https://chicago-sparkle-elite-cleaning-default-rtdb.firebaseio.com/comments.json',
            options
        )
        if (res) {
            enqueueSnackbar('The feedback was successfully sent!!', { variant: 'success' });
        } else {
            enqueueSnackbar('Error Occurred', { variant: 'error' })

        }


        const message =
            `New feedback!!!${'%0A'}Name: ${name}${'%0A'}Phone: ${phone}${'%0A'}Type of Service: ${service}${'%0A'}Massage: ${comment}${'%0A'}Rating: ${rating}`
        await sendMessage(message)
        handleClose()


    };
    const [more, setMore] = useState(true)
    const [swap, setSwap] = useState(false)
    const [name_list] = useState([])
    const LearnMore = (name) => {
        if (name_list.includes(name)) {
            let index = name_list.indexOf(name);
            name_list.splice(index, 1);


        } else {
            name_list.push(name)

        }
        setMore(!more)
        setSwap(!swap)
    }


    return (
        <ThemeProvider theme={theme}>
            <div className={'Customers'}
                id={'customers'}>
                <div className={'background'}>
                    <h3>Happy Customers</h3>
                </div>
                <Grid container className={'comments'}>
                    {costomers.slice((currentPage * 3) - 3, (currentPage * 3)).map((item) => (
                        <Grid item xs={12} md={4}>
                            <div className="comment">
                                <h4>{item.Name}</h4>
                                <h5>{item.Offering}</h5>
                                <p className={`${name_list.includes(item.Name) ? 'none' : 'show'} `}>{item.Massage}</p>


                                <Box
                                    sx={{
                                        width: 200,
                                        margin: ' 27px auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Rating
                                        name="text-feedback"
                                        value={item.Rating}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />

                                </Box>
                                <button className={`Button ${name_list.includes(item.Name) ? 'none' : 'More'}`}
                                    onClick={() => LearnMore(item.Name)}
                                    style={item.Massage.length < 420 ? { display: 'none' } : null}
                                >
                                    <p className={'More__p'}>Learn More</p>

                                    <span
                                        className={name_list.includes(item.Name) ? 'none' : 'Swap'}><ExpandCircleDownOutlinedIcon /></span>

                                </button>
                            </div>
                        </Grid>

                    ))}
                    <Grid item xs={12}>
                        <Pagination count={allPage} variant="outlined" shape="rounded" color={'primary'}
                            onChange={(event, value) => setCurrentPage(value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            className={'Button__feedback'}
                            variant="contained"
                            color={'primary'}
                            onClick={handleOpen}>
                            feedback</Button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                                backdrop: {
                                    timeout: 500,
                                },
                            }}
                        >
                            <Fade in={open}>
                                <Box className={'Modal'}
                                    sx={{
                                        margin: '0 auto 50px',
                                        textAlign: 'center',
                                        '& .MuiTextField-root': { m: 1, margin: '0', textAlign: 'left', width: '100%' },
                                        '& .MuiFormControl-root': { padding: '10px 8px 8px', },
                                        '& .MuiInputLabel-root': {
                                            marginBottom: '10px'
                                        },
                                        '& .MuiStack-root': { padding: '0', width: '100%' }
                                    }}

                                >
                                    <div>
                                        <FormControl
                                            className={'width60ch'}

                                        >
                                            <InputLabel shrink htmlFor="bootstrap-input" size='medium'>
                                                {[(nameError && nameDirty) ?
                                                    <h4 className={' form_name Error'}>{nameError}</h4> :
                                                    <h4 className={'form_name'}>Name</h4>]}
                                            </InputLabel>
                                            <TextField
                                                multiline
                                                id="outlined-textarea"
                                                placeholder="Jones Williams"
                                                name={'name'}
                                                value={name}
                                                onChange={e => nameHandler(e)}
                                                onBlur={e => blurHandler(e)}
                                            >
                                            </TextField>
                                        </FormControl>
                                        <FormControl
                                            className={'width60ch'}
                                        >
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {[(phoneError && phoneDirty) ?
                                                    <h4 className={' form_name Error'}>{phoneError}</h4> :
                                                    <h4 className={'form_name'}>Phone</h4>]}
                                            </InputLabel>
                                            <MuiTelInput name={'phone'}
                                                defaultCountry="US" onChange={e => phoneHandler(e)}
                                                onBlur={e => blurHandler(e)} value={phone}
                                                inputProps={{ maxLength: 20 }}
                                            />


                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl
                                            className={'width60ch'}
                                        >
                                            <InputLabel shrink htmlFor="bootstrap-input" size='medium'>
                                                <h4 className={'form_name'}>Type of Service</h4>
                                            </InputLabel>
                                            <TextField
                                                fullWidth
                                                name='Type of Service'
                                                id="outlined-select-currency"
                                                select
                                                placeholder="Type of Service"
                                                defaultValue="Type of Service"
                                                onChange={e => serviceHandler(e)}


                                            >

                                                <MenuItem disabled value="Type of Service">
                                                    <em>Type of Service</em>
                                                </MenuItem>
                                                {service_list.map((option) => (
                                                    <MenuItem key={option.value} value={option.label}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </FormControl>

                                        <FormControl
                                            className={'width60ch'}
                                        >
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {[(commentError && commentDirty) ?
                                                    <h4 className={' form_name Error'}>{commentError}</h4> :
                                                    <h4 className={'form_name'}>Comment</h4>]}
                                            </InputLabel>
                                            <TextField
                                                id="outlined-select-currency"
                                                multiline
                                                type="comment"
                                                rows={4}
                                                value={comment}
                                                placeholder="Comment"
                                                name={'comment'}
                                                onChange={e => commentHandler(e)}
                                                onBlur={e => blurHandler(e)}

                                            >


                                            </TextField>

                                        </FormControl>

                                        <Box
                                            sx={{
                                                width: 200,
                                                margin: ' 10px auto',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Rating
                                                size="large"
                                                name="text-feedback"
                                                precision={0.5}
                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                onChange={e => ratingHandler(e)}

                                            />

                                        </Box>


                                    </div>
                                    <div >
                                        <Button className={'button'} variant="contained" sx={{ p: 2, margin: '0 auto' }}
                                            onClick={handleSubmit}
                                            disabled={formValid}>
                                            Leave feedback
                                        </Button>
                                    </div>


                                </Box>
                            </Fade>
                        </Modal>
                    </Grid>

                </Grid>

            </div>
        </ThemeProvider>
    );
}

export default Customers;
