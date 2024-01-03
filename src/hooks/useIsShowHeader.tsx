
import { useLocation } from "react-router"
/**
 * 用于控制头部显示隐藏的 hook
 * @returns boolean
 */
export default function useIsShowHeader() {
    const location = useLocation();
    return location.pathname !== '/login'
}
