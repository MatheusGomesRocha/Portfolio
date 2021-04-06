
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default(props) => {
    const DefaultBtn = withStyles(() => ({
        root: {
            padding: 20,
            height: 50,
            marginTop: 30,
            border: props.border ? '1px solid #FEB633' : '1px solid transparent',
            borderRadius: 5,
            width: 200,
            backgroundColor: props.border ? 'transparent' : '#FEB633',
            color: '#fff',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'capitalize',
            fontFamily: 'Poppins',
            fontSize: 18,
            transition: '250ms',
            '&:hover': {
                backgroundColor: 'transparent',
                border: '1px solid #FEB633',
                color: '#FEB633'
            }
        },
    }))(Button);

    return (
        <DefaultBtn>{props.title}</DefaultBtn>
    )
}