import {Server} from 'http';

import General from './general';
import Helpers from '../helpers';

export default class Handlers {

    general: General
    server: Server
    helpers: Helpers
    constructor(server: Server, helpers:Helpers ){
        
        this.server = server
        this.helpers = helpers 
        this.general = new General(helpers)
    }

    

}