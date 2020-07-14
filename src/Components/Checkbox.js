import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const checkBoxStyles = (theme) => ({
  root: {
    '&$checked': {
      color: '#673ab7',
    },
  },
  checked: {},
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

export default CustomCheckbox;
