import { Button, ButtonProps } from 'tamagui'
import { Home } from '@tamagui/lucide-icons'

interface CustomButton extends ButtonProps {
    label: string;
}

const CustomButton = (props : CustomButton) => {
    return (
        <Button
           {...props}
        >
            {props.label}
        </Button>
    )
}

export default CustomButton;