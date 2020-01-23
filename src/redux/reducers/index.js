import {devices} from './mainData';
import deviceReducer from './devices';
import From from './from';
import To from './to';
import Flag from './flag';
import Routes from './route';
import {SideClick} from './click';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    carId:deviceReducer,
    from:From,
    to:To,
    devices:devices,
    flag:Flag,
    route:Routes,
    click:SideClick,
})

export default rootReducer;