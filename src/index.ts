import {MikroORM} from "@mikro-orm/core";
import { Post } from './entities/Post';
import { __prod__ } from './constants';

const main = async () => {

    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'cloneddit',
        user: '',
        password: '',
        type: 'postgresql',
        debug: !__prod__,
    })
}


main()

console.log("hello world")