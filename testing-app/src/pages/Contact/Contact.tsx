import {Button, TextField} from "@mui/material";
import React, {Component} from "react";
import SendIcon from '@mui/icons-material/Send';
import ContactIntro from "../../components/ContactIntro";
import Header from "../../components/Header";

export default class Contact extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="p-6">
                    <ContactIntro/>
                    <div className="mt-3">
                        <form className="w-full py-8 px-32 flex flex-col space-y-3">
                            <TextField
                                label="Email"
                                type="email"
                                variant="filled"
                                placeholder="Enter Your Email Here"
                                fullWidth={true}
                                required
                            />
                            <TextField
                                label="Message"
                                type="text"
                                variant="filled"
                                placeholder="Enter Your Message Here"
                                fullWidth={true}
                                multiline
                                minRows={10}
                                maxRows={Infinity}
                                required
                            />
                            <Button variant="contained" color="success" size="large"
                                    endIcon={<SendIcon/>}>Submit</Button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
