import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";

type ContactFormProps = {};

export default class ContactForm extends Component {
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
