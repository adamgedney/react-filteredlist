import Promise from 'bluebird';
import _utils from '../_utils';

export default {
    id: 'state',
    type:'select',
    prop: 'state',
    label: 'States',
    value:null,//used this to set a default value. Value must be null or undefined to be excluded. Filters recognize boolean true/false
    multiple : true,
    options : {
        key : 'entityUUID',
        value : 'entityValue',

        // Must return a collection
        getOptions : ()=>new Promise((resolve,reject)=>{
            return _utils.getDefaults('states')
                .then(resolve)
        })
    }
};