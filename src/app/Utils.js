import { AsyncStorage, Alert, NetInfo } from 'react-native';
import Moment from 'moment';

// --call API
// -1 Lỗi không lấy dữ liệu, -2 lỗi không lấy được token, -3 lỗi API
function nlog(...val) {
    console.log(...val);
}

// --navigation, [core] pass param on all of app
function goscreen(nthis, screen, param = null) {
    if (param == null)
        nthis.props.navigation.navigate(screen);
    else nthis.props.navigation.navigate(screen, { ...param });

}

function goback(nthis, screen = '') {
    if (screen == '')
        nthis.props.navigation.goBack();
    else nthis.props.navigation.goBack(screen);
}

// -- Alert native, custom call func
function msgAlert(title, message = '', btnTextOk = 'OK', onPress = () => {} ) {
    setTimeout(() => {
        Alert.alert(title, message, [{ text: btnTextOk, onPress }]);
    }, 520);
}

function msgAlertYesNo(title, message = '', btnTextYes = 'Xác nhận', btnTextNo = 'Xem lại', funcYes = () => { console.log('is Yes') }, funcNo = function () { console.log('is No') }) {
    Alert.alert(
        title,
        message,
        [
            { text: btnTextNo, onPress: funcNo },
            { text: btnTextYes, onPress: funcYes, style: 'cancel' }
        ],
        { cancelable: false }
    )
}
function ngetParam(nthis, keys, defaultValue) {
    let param = nthis.props.navigation.getParam(keys, defaultValue);
    return param;
}

export default {nlog,goscreen,goback,msgAlert,msgAlertYesNo, ngetParam};