import { defineStore } from "pinia";

export const useOrganizationStore = defineStore("OrganizationStore", {
    state: () => {
        return {
            active: false,
            organization: {
                orgId: '',
                companyName: '',
                contactNumber: '',
                createdDate: '',
                organizationType: '',
                fivetranGroupId: '',
                refreshFrequency: '',
                billingOptionId: '',
                //billingOption: '',
                billingEnum: '',
                billingFrequency: '',
                billDueDate: '',
                //nextInvoiceDate: '',
                billingPrice: '',
                billingTier: '',
            },
            selectedOrgId: '',
        }
    },
    actions: {
        populateOrgData() {
            // Currently using "setDetails"
            //call fetch_organization_by_id, orgID provided upon login and populating User Data.
        },
        updateBillingPlan () {

        },
    },
    getters: {
        getOrgData () {
            //Should we make a billing object and an org object almost like user?
        }
    }
});