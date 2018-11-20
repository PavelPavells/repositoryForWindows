import {combineReducers} from 'redux';
import market from './market';
import farm from './farm';
import budjet from './budjet';
export default combineReducers({
    market, // => market: market(state.market, action)
    farm, // => farm: farm(state.farm, action)
    budget, // => budget: budget(state.budget, action)
});