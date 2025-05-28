import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from "@mui/material/InputLabel";
import {Button, FormControl} from "@mui/material";
import './BookSchedule.css'
import {useEffect, useState} from "react";
import {sendMessage} from "../../api/bookSchedule.ts";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

import dayjs from 'dayjs';
import {renderTimeViewClock, TimePicker} from "@mui/x-date-pickers";
import * as PropTypes from "prop-types";
import {MuiTelInput} from 'mui-tel-input'
import {enqueueSnackbar} from 'notistack';




const today = dayjs();

const Price_list = {
    'Regular Cleaning': 40,
    'After Repair': 43,
    'Move-in/ Move-out': 45,
    'Deep Cleaning': 43
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
    // {
    //     value: 3,
    //     label: 'Office/ Commercial',
    // },
    {
        value: 4,
        label: 'Move-in/ Move-out',
    },
    {
        value: 5,
        label: 'Deep Cleaning',
    },
    // {
    //     value: 6,
    //     label: 'Basic Cleaning',
    // },
    // {
    //     value: 7,
    //     label: 'Pets and a Clean Home',
    // },
    // {
    //     value: 8,
    //     label: 'Holiday Cleaning',
    // },
];
const squareFootage_list = [
    {
        value: 5,
        label: '100 Sq Ft - 200 Sq Ft'
    },
    {
        value: 1,
        label: '200 Sq Ft - 400 Sq Ft'
    },
    {
        value: 2,
        label: '400 Sq Ft - 600 Sq Ft'
    },
    {
        value: 3,
        label: '600 Sq Ft - 800 Sq Ft'
    },
    {
        value: 4,
        label: '800 Sq Ft - 1500 Sq Ft'
    },
    {
        value: 6,
        label: '1500 Sq Ft - 2000 Sq Ft'
    },
    {
        value: 7,
        label: '2000 Sq Ft - 2500 Sq Ft'
    },
    {
        value: 8,
        label: '2500 Sq Ft - 3000 Sq Ft'
    },
    {
        value: 9,
        label: '3000 Sq Ft - 4000 Sq Ft'
    },
    {
        value: 10,
        label: '4000 Sq Ft - 5000 Sq Ft'
    },
    {
        value: 11,
        label: 'More 5000 Sq Ft'
    },
];
const bedrooms_list = [
    {
        value: 1,
        label: '1 Bedrooms'
    },
    {
        value: 2,
        label: '2 Bedrooms'
    },
    {
        value: 3,
        label: '3 Bedrooms'
    },
    {
        value: 4,
        label: '4 Bedrooms'
    },
    {
        value: 5,
        label: '5 Bedrooms'
    },
    {
        value: 6,
        label: '6 Bedrooms'
    },
    {
        value: 7,
        label: '0 Bedrooms'
    },
];
const bathrooms_list = [
    {
        value: 1,
        label: '1 Bathrooms'
    },
    {
        value: 2,
        label: '2 Bathrooms'
    },
    {
        value: 3,
        label: '3 Bathrooms'
    },
    {
        value: 4,
        label: '4 Bathrooms'
    },
    {
        value: 5,
        label: '5 Bathrooms'
    },
    {
        value: 6,
        label: '6 Bathrooms'
    },
    {
        value: 7,
        label: '0 Bathrooms'
    },
];

function InputMask() {
    return null;
}

InputMask.propTypes = {
    value: PropTypes.string,
    mask: PropTypes.string,
    children: PropTypes.func
};
export default function BookSchedule() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#003156',
            },

        },
    });

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('Regular Cleaning')
    const [bedrooms, setBedrooms] = useState('1 Bedrooms')
    const [bathrooms, setBathrooms] = useState('')
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [address, setAddress] = useState('')
    const [squareFootage, setSquareFootage] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)

    const [nameError, setNameError] = useState('Name cannot be empty')
    const [phoneError, setPhoneError] = useState('Phone cannot be empty')
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if (nameError || phoneError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, phoneError])

    const blurHandler = (e) => {
        console.log(e.target.name, 'switch')

        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'phone' :
                setPhoneDirty(true)
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
    const squareFootageHandler = (e) => {
        setSquareFootage(e.target.value)

    }
    const bedroomsHandler = (e) => {
        setBedrooms(e.target.value)

    }
    const bathroomsHandler = (e) => {
        setBathrooms(e.target.value)

    }
    const addressHandler = (e) => {
        setAddress(e.target.value)

    }

    useEffect(() => {
        setPrice(Number(Price_list[service]) + Number((bedrooms.split(' ')[0] * 10)) + Number((bathrooms.split(' ')[0] * 25)))
    }, [service, bedrooms, bathrooms])


    const dateHandler = (e) => {
        setDate(e.$D, e.$M + 1, e.$y)
    }
    const timeHandler = (e) => {
        setTime(`${e.$d.getHours()}:${e.$d.getMinutes()}`)
        console.log(e)

    }

    const handleSubmit = async () => {
        const message =
            `New order!!!${'%0A'}Name: ${name}${'%0A'}Phone: ${phone}${'%0A'}Date: ${date}${'%0A'}Time : ${time}${'%0A'}Address: ${address}${'%0A'}Type of Service: ${service} ${'%0A'}Total Square Footage: ${squareFootage}${'%0A'}Bedrooms: ${bedrooms}${'%0A'}Bathrooms: ${bathrooms}${'%0A'}`
        await sendMessage(message)
        enqueueSnackbar('The message was successfully sent!!', {variant: 'success'});
        setName('');
        setPhone('');
        setFormValid(false);


    };
    const [open, setOpen] = React.useState(false);
    const [step, setStep] = React.useState(1)

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);


    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                id={'form'}
                className={'form'}
                component="form"
                sx={{
                    margin: '0 auto 50px',
                    textAlign: 'center',
                    '& .MuiTextField-root': {m: 1, margin: '0', textAlign: 'left', width: '100%'},
                    '& .MuiFormControl-root': {padding: '10px 8px 8px',},
                    '& .MuiInputLabel-root': {
                        marginBottom: '10px'
                    },
                    '& .MuiStack-root': {padding: '0', width: '100%'}
                }}
                noValidate
                autoComplete="off"
            >
                <div className={'logo'}>
                    <h3>
                        Book your cleaning 2 minutes!
                    </h3>

                </div>
                <div className={'progress'}>
                    <div className={'step'}>
                        <h5>1. Service</h5>
                        <div className={'span'}
                             style={step > 0 ?
                                 {
                                     borderTopLeftRadius: "10px", borderBottomLeftRadius: '10px', opacity: 1
                                 }
                                 :
                                 {
                                     borderTopLeftRadius: "10px", borderBottomLeftRadius: '10px', opacity: 0.3
                                 }
                             }
                        />
                    </div>
                    <div className={'step'}>
                        <h5>2. Time</h5>
                        <div className={'span'} style={step > 1 ? {opacity: 1} : {opacity: 0.3}}/>
                    </div>
                    <div className={'step'}>
                        <h5>3. Details</h5>
                        <div className={'span'} style={step > 2 ? {opacity: 1} : {opacity: 0.3}}/>
                    </div>
                    <div className={'step'}>
                        <h5>4. Payment</h5>
                        <div className={'span'} style={step > 3 ? {opacity: 1} : {opacity: 0.3}}/>
                    </div>
                    <div className={'step'}>
                        <h5>5. Done</h5>
                        <div className={'span'}
                             style={step > 4 ? {
                                     borderTopRightRadius: '10px',
                                     borderBottomRightRadius: '10px',
                                     opacity: 1
                                 }
                                 : {borderTopRightRadius: '10px', borderBottomRightRadius: '10px', opacity: 0.3}}/>
                    </div>

                </div>

                <div className={'select'}>
                    { step < 4 && <h6>Please select service:</h6>}
                    {step === 4 && <h6 className={'pay'}>Estimated cost of ${price} to ${Math.ceil(price * 1.35)}. Payment is made on place</h6>}
                    {step === 5 && <h6 className={'application'}>Your application </h6>}

                </div>

                {step === 1 &&
                    <div className={'FormControl'}>
                        <FormControl
                            sx={{
                               /* width: {lg: '39ch', md: '70ch', sm: '70ch', xs: '38ch'},*/
                                width:"100%"
                            }}
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
                                defaultValue={service}
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
                            className={'width30ch'}

                            sx={{
                                padding: '0 !important',
                            }}>
                            <div style={{display: 'flex'}}>
                                <FormControl
                                    className={'width30ch'}
                                >
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        <h4 className={'form_name'}>Bedrooms</h4>
                                    </InputLabel>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        defaultValue="1 Bedrooms"
                                        onChange={e => bedroomsHandler(e)}
                                    >
                                        <MenuItem disabled value="Bedrooms">
                                            <em>Bedrooms</em>
                                        </MenuItem>

                                        {bedrooms_list.map((option) => (
                                            <MenuItem key={option.value} value={option.label}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </FormControl>
                                <FormControl
                                    className={'width30ch'}>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        <h4 className={'form_name'}> Bathrooms</h4>
                                    </InputLabel>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        defaultValue="Bathrooms"
                                        onChange={e => bathroomsHandler(e)}
                                    >
                                        <MenuItem disabled value="Bathrooms">
                                            <em>Bathrooms</em>
                                        </MenuItem>

                                        {bathrooms_list.map((option) => (
                                            <MenuItem key={option.value} value={option.label}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </FormControl>
                            </div>
                        </FormControl>

                    </div>
                }
                {step === 2 && <div>
                    <FormControl
                        className={'width60ch'}
                    >
                        <InputLabel shrink htmlFor="bootstrap-input" size='medium'>
                            <h4 className={'form_name'}>Date (time)</h4>
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer

                                components={[
                                    'DatePicker',
                                ]}

                            >
                                <DemoItem>
                                    <DatePicker
                                        onChange={e => dateHandler(e)}
                                        defaultValue={today}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                    />
                                </DemoItem>


                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl
                        className={'width60ch'}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                            <h4 className={'form_name'}>Time</h4>
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}
                        >
                            <DemoContainer components={['TimePicker']}
                            >
                                <TimePicker
                                    onChange={e => timeHandler(e)}
                                    label=""
                                    viewRenderers={{
                                        hours: renderTimeViewClock,
                                        minutes: renderTimeViewClock,
                                        seconds: renderTimeViewClock,
                                    }}

                                />
                            </DemoContainer>
                        </LocalizationProvider>

                    </FormControl>
                </div>
                }
                {step === 3 && <div>
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
                                         inputProps={{maxLength: 20}}
                            />


                        </FormControl></div>
                    <div>
                        <FormControl
                            className={'width60ch'}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                <h4 className={'form_name'}>Address</h4>
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="outlined-select-currency"
                                placeholder="564 Kingstreate, Mailbourne"
                                onChange={e => addressHandler(e)}
                            >

                            </TextField>

                        </FormControl>

                        <FormControl
                            className={'width60ch'}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                <h4 className={'form_name'}>Total Square Footage</h4>
                            </InputLabel>
                            <TextField
                                fullWidth
                                id="outlined-select-currency"
                                select
                                defaultValue="Total Square Footage"
                                onChange={e => squareFootageHandler(e)}
                            >

                                <MenuItem disabled value="Total Square Footage">
                                    <em>Total Square Footage</em>
                                </MenuItem>
                                {squareFootage_list.map((option) => (
                                    <MenuItem key={option.value} value={option.label}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </FormControl>
                    </div>
                </div>}

                {step === 5 && <div className={'applicationBox'}>
                    <div className={'application'}>
                        <h6>Name:&nbsp;</h6>
                        <p>{name}</p>
                    </div>
                    <div className={'application'}>
                        <h6>Phone:&nbsp;</h6>
                        <p>{phone}</p>
                    </div>
                    <div className={'application'}>
                        <h6>Date:&nbsp;</h6>
                        <p>{date}</p>
                    </div>
                    <div className={'application'}>
                        <h6>Time:&nbsp;</h6>
                        <p>{time}</p>
                    </div>
                    <div className={'application'}>
                        <h6>Address:&nbsp;</h6>
                        <p>{address}</p>
                    </div>
                    <div className={'application service'}>
                        <h6>Type of Service:&nbsp;</h6>
                        <p>{service}</p>
                    </div>
                    <div className={'application squareFootage'}>
                        <h6>Total Square Footage:&nbsp;</h6>
                        <p>{squareFootage}</p>
                    </div>
                    <div className={'application'}>
                        <h6>Bedrooms: &nbsp;</h6>
                        <p>{bedrooms}</p>
                    </div>
                    <div className={'application'}>
                        <h6>Bathrooms:&nbsp; </h6>
                        <p>{bathrooms}</p>
                    </div>
                    {!formValid &&
                    <div className={'formValid'}>
                        <h6>
                            You need to fill in all the fields
                        </h6>
                    </div>
                    }


                </div>}

                <div className={'line'}/>
                <div className={'button_Box'}>
                    {step > 1 ?
                        <Button
                            sx={{padding:'10px 35px'}}

                            onClick={() => {
                                setStep(step - 1)
                            }}

                            variant="contained"
                            color={'primary'}>BACK</Button>
                        : <span/>
                    }

                    {step !== 5 ? <Button
                            sx={{padding:'10px 35px'}}

                            onClick={() => {
                            setStep(step + 1)
                        }}
                        variant="contained"
                        color={'primary'}
                        >NEXT</Button>
                        :
                        <Button
                            sx={{padding:'10px 35px'}}
                            variant="contained"
                                onClick={handleSubmit}
                                disabled={!formValid}>
                            Confirm
                        </Button>
                    }
                </div>

                <div className={'ellipse ellipse__one'}></div>
                <div className={'ellipse ellipse__two'}></div>
                <div className={'ellipse ellipse__three'}></div>
            </Box>
        </ThemeProvider>
    );
}
