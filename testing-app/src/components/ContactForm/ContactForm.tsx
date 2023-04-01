import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, Component } from "react";

type ContactFormProps = {};

type ContactFormState = {
  email: string;
  message: string;
  isValidEmail: boolean;
};

export default class ContactForm extends Component<
  ContactFormProps,
  ContactFormState
> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      email: "",
      message: "",
      isValidEmail: false,
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "email") {
      if (emailRegex.test(value)) {
        this.setState((prevState) => ({
          ...prevState,
          isValidEmail: true,
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          isValidEmail: false,
        }));
      }
    }


  render() {
    return (
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
        <Button
          variant="contained"
          color="success"
          size="large"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    );
  }
}
