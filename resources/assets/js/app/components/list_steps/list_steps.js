


export default {
    // data() {
    //     return {
    //         'default_image': require('./../../../assets/images/timeline-img-card-left.png'),
    //     }
    // },
    props: {
        /**
         * Title of the event
         */
        history: Array,
            required: true,

        /**
         * Title of the event
         */
        addHistory: {
            type: Function,
            required: true
        },
    },
};
