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

    async getBrachDetails({ dealers_id, branch_id }) {
        let branchDetails = {};
        return new Promise((resolve, reject) => {
            data.data.locations.forEach((ele, index) => {
                if (ele.dealers_id === dealers_id) {
                    ele.branches.forEach((branch, index) => {
                        if (branch.branch_id === branch_id) {
                            branchDetails = branch;
                            resolve(branchDetails);
                        }
                    });
                }
            });
        });
    }

    async getSubcategories({ dealers_id, branch_id, category_name }) {
        let branchDetails = {};
        return new Promise((resolve, reject) => {
            data.data.locations.forEach((ele) => {
                if (ele.dealers_id === dealers_id) {
                    ele.branches.forEach((branch) => {
                        if (branch.branch_id === branch_id) {
                            branch.categories.forEach((category) => {
                                if (category.name === category_name) {
                                    console.log(category);
                                    branchDetails = category;
                                    resolve(branchDetails);
                                }
                            });
                        }
                    });
                }
            });
        });
    }
}

export default ApiManager;
