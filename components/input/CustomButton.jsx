import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles(() => ({
    root: {
      color: "#eee",
      backgroundColor: "rgb(79, 204, 68)",
      '&:hover': {
        backgroundColor: "rgb(79, 204, 68)",
      },
    },
  }))(Button);

function CustomButton(props) {
    return (
        <ColorButton size="large" variant="contained" onClick={props.onClick}>{props.children}</ColorButton>
    )
}

export default CustomButton