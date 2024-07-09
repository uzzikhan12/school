import { Button } from "@mui/material";

export default function (props:any)
 {
    const {label, onClick, color, variant, className, type} = props;

    return(
    <>
        <Button 
            onClick={onClick}
            variant={variant}
            sx={{paddingX:3,borderRadius:30}}
            color={color}
            className={className}
            type={type}
        >
            {label}
        </Button>
    </>
    )
}