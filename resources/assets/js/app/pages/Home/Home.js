/* ============
 * Page AboutUs
 * ============
 *
 *
 */

import cardv from './../../components/card/card.vue';
import listStepsv from './../../components/list_steps/list_steps.vue';

export default {
    data() {
        return {
            users: [
                {
                    name: 'Marie Mastad',
                    img: require('./../../../assets/images/marie_mostad.png'),
                    icon: require('./../../../assets/images/front-team-icon.svg'),
                    role: 'COO & founder',

                },
                {
                    name: 'Mats Lyngstad',
                    img: require('./../../../assets/images/mats_lyngstad.png'),
                    icon: require('./../../../assets/images/front-team-icon.svg'),
                    role: 'CEO & founder'
                },
                {
                    name: 'Chris Constandce',
                    img: require('./../../../assets/images/mats_lyngstad.png'),
                    icon: require('./../../../assets/images/front-team-icon.svg'),
                    role: 'Head of design'
                },
                {
                    name: 'Yuri Karapetyan',
                    img:  require('./../../../assets/images/yuri_karapetyan.png'),
                    icon: require('./../../../assets/images/front-team-icon.svg'),
                    role: 'Lead developer'
                },
                {
                    name: 'Angel Wang',
                    img: require('./../../../assets/images/angela_weang.png'),
                    icon: require('./../../../assets/images/front-team-icon.svg'),
                    role: 'Head of Growth'
                },
                // {
                //     name: 'Paul Arnold',
                //     role: 'Head of Sales'
                // },
            ],
            history: [
                {
                    title: 'Completing the team',
                    subTitle: 'Chris joined us as Head of Design',
                    description: 'By hiring a head of design we completed the core roles to kick ass!',
                    img: require('./../../../assets/images/timeline-img-card-left.png'),
                    date: '24th of july, 2017'
                },
                {
                    title: 'Finding a new office',
                    subTitle: 'A beautiful penthouse in Oslo',
                    description: 'With a beautiful skyline over Oslo, our new office is beauty!',
                    img: require('./../../../assets/images/timeline-img-card-right.png'),
                    date: '3rd of july, 2017'
                },
                {
                    title: 'Signing Universal Music',
                    subTitle: 'Our biggest client so far',
                    description: 'Signing our biggest brand! Great coverage ang more to come.',
                    img: require('./../../../assets/images/universal-history.png'),
                    date: '17th of june, 2017'
                },
                {
                    title: 'Expanding the team',
                    subTitle: 'Paul joined us as Head of Sales',
                    description: 'With the addition of Paul, the head of sales team is completed!',
                    img: require('./../../../assets/images/paul-history.png'),
                    date: '12th of May, 2017'
                },
                {
                    title: 'Completing the team',
                    subTitle: 'Chris joined us as Head of Design',
                    description: 'By hiring a head of design we completed the core roles to kick ass!',
                    img: require('./../../../assets/images/timeline-img-card-left.png'),
                    date: '1th of May, 2017'
                },
                {
                    title: 'Finding a new office',
                    subTitle: 'A beautiful penthouse in Oslo',
                    description: 'With a beautiful skyline over Oslo, our new office is beauty!',
                    img: require('./../../../assets/images/timeline-img-card-right.png'),
                    date: '3rd of july, 2017'
                }
            ],
            }
        },

    methods: {
        addHistory() {
            console.log('dgf');
            this.history.push(
                ...[
                    {
                        title: 'Expanding the team',
                        subTitle: 'Paul joined us as Head of Sales',
                        description: 'With the addition of Paul, the head of sales team is completed!',
                        img: require('./../../../assets/images/paul-history.png'),
                        date: '12th of May, 2017'
                    },
                    {
                        title: 'Completing the team',
                        subTitle: 'Chris joined us as Head of Design',
                        description: 'By hiring a head of design we completed the core roles to kick ass!',
                        img: require('./../../../assets/images/timeline-img-card-left.png'),
                        date: '1th of May, 2017'
                    },
                    {
                        title: 'Finding a new office',
                        subTitle: 'A beautiful penthouse in Oslo',
                        description: 'With a beautiful skyline over Oslo, our new office is beauty!',
                        img: require('./../../../assets/images/timeline-img-card-right.png'),
                        date: '3rd of july, 2017'
                    }
                ]
            );
        },
    },
    created() {
    },

    components: {
        cardv: cardv,
        listStepsv: listStepsv,
    },
};