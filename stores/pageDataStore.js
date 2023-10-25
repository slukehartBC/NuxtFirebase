import { defineStore } from "pinia";

export const usePageStore = defineStore("PageStore", {
    state: () => {
        return {
            title: '',
            //Anything to consider for RUM? : {
            //},
        }
    },
    actions: {
        populatePageData() {
            // Currently using "setDetails"
            //call fetch_organization_by_id, orgID provided upon login and populating User Data.
        },
        updatePageData () {
            //Process for handling updates to page's state (title).
        },
    },
    getters: {
        //Sets the title for each page in the state.
        getPageData: (state) => { return this.getPageData(state.title)},
    }
});