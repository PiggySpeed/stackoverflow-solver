const bear = {
    instance: (function () {
        console.log('started');
        const tree1 = {};
        // let tree1;

        return function () {
            console.log('started2');
            return tree1;
            // if (!tree1) {
            //     tree1 = {};
            // }
            // return tree1;
        };
    }()),
    prop: {}
};

module.exports = bear;