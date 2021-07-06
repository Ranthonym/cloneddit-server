import { __prod__ } from './constants';
import {MikroORM} from "@mikro-orm/core";

const main = async () => {

    const orm = await MikroORM.init({
        entities: [],
        dbName: 'lireddit',
        user: '',
        password: '',
        type: 'postgresql',
        debug: !__prod__,
    })
}


main()

console.log("hello world")