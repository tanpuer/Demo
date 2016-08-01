/**
 * Created by cw on 16/7/28.
 */

/**返回键,不返回启动页*/
export function naviGobak(navigator) {
    if (navigator && navigator.getCurrentRoutes().length>1){
        navigator.pop();
        return true;
    }else {
        return false;
    }
}