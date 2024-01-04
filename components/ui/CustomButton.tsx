import { Button } from 'tamagui'
import { Home } from '@tamagui/lucide-icons'
const CustomButton = ({label, color} : any) => {
    return (
        <Button
            alignSelf="center" 
            backgroundColor={color}
            pressTheme={true}
            icon={Home} 
            size="$6"
        >
            {label}
        </Button>
    )
}

export default CustomButton;