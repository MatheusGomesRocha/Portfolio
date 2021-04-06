
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default(props) => {
    const DefaultBtn = withStyles(() => ({
        root: {
            padding: 20,
            height: 60,
            marginTop: 30,
            border: props.border ? '1px solid #e14b5a' : '1px solid transparent',
            borderRadius: 5,
            width: 220,
            backgroundColor: props.border ? 'transparent' : '#e14b5a',
            color: '#fff',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'capitalize',
            fontFamily: 'Poppins',
            fontSize: 20,
            transition: '250ms',

            '&:hover': {
                backgroundColor: props.border ? '#e14b5a' : 'transparent',
                border: props.border ? '1px solid transparent' : '1px solid #e14b5a',
                color: props.border === false && '#e14b5a'
            }
        },
    }))(Button);

    return (
        <DefaultBtn>{props.title}</DefaultBtn>
    )
}