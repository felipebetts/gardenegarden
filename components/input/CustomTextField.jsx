import TextField from '@material-ui/core/TextField'

import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgb(79, 204, 68)',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#aaa',
        },
        '&:hover fieldset': {
          borderColor: '#aaa',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(79, 204, 68)',
        },
      },
    },
  })(TextField);

function CustomTextField(props) {

    if(props.fullWidth) {
      return (
          <CssTextField variant="outlined" label={props.label} style={{ margin: "20px 10px"}} size="small" fullWidth />
      )
    } else {
      return (
        <CssTextField variant="outlined" label={props.label} style={{ margin: "20px 10px"}} size="small" />
    )
    }
}

export default CustomTextField