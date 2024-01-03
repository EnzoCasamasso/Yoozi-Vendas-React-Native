import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { useRouter } from "expo-router";

const CustomDrawerContent = (props: any) => {
    const router = useRouter()
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem label={"Sair"} onPress={() => router.replace('/')}/>
        </DrawerContentScrollView>
    )
}
export default CustomDrawerContent;