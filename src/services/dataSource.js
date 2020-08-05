import data from '../dummy/catalog.json';
import { Component } from 'react';

export class ApiManager extends Component {
    static myInstance = null;

    static getInstance() {
        return new ApiManager();
    }

    async getLocations() {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    async getBrachDetails({ branch_id }) {
        return new Promise((resolve, reject) => {
            resolve({
                branch_id: 'ALN',
                name: 'Allentown',
                categories: [
                    {
                        name: 'Booms',
                        image: 'booms.png',
                        subcategories: [
                            {
                                name: 'Articulated - Electric',
                                image: 'booms_articulated_electric.png',
                            },
                            {
                                name: 'Articulated - Engine',
                                image: 'booms_articulated_engine.png',
                            },
                        ],
                    },
                    {
                        name: 'Carry Deck Crane',
                        image: 'carry_deck_crane.png',
                        subcategories: [{ name: 'NA' }],
                    },
                    {
                        name: 'Forklifts',
                        image: 'forklifts.png',
                        subcategories: [
                            {
                                name: 'Electric',
                                image: 'forklift_electric.png',
                            },
                            {
                                name: 'IC Cushion',
                                image: 'forklift_ic_cushion.png',
                            },
                            {
                                name: 'IC Pneumatic',
                                image: 'forklift_ic_pneumatic.png',
                            },
                        ],
                    },
                    {
                        name: 'Scissor Lifts',
                        image: 'scissor_lifts.png',
                        subcategories: [
                            { name: 'Slab', image: 'scissor_lift_slab.png' },
                        ],
                    },
                    {
                        name: 'Single Man Lifts',
                        image: 'single_man_lifts.png',
                        subcategories: [
                            {
                                name: 'Driveable',
                                image: 'single_man_lifts_driveable.png',
                            },
                        ],
                    },
                    {
                        name: 'Earth Moving',
                        image: 'earth_moving.png',
                        subcategories: [
                            {
                                name: 'Skidsteer',
                                image: 'earth_moving_skid_steer.png',
                            },
                        ],
                    },
                ],
            });
        });
    }

    getSubcategories({ branch_id, category_name }) {
        return new Promise((resolve, reject) => {
            resolve({
                name: 'Forklifts',
                image: 'forklifts.png',
                subcategories: [
                    {
                        name: 'Electric',
                        image: 'forklift_electric.png',
                    },
                    {
                        name: 'IC Cushion',
                        image: 'forklift_ic_cushion.png',
                    },
                    {
                        name: 'IC Pneumatic',
                        image: 'forklift_ic_pneumatic.png',
                    },
                ],
            });
        });
    }
}

export default ApiManager;
