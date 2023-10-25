import { defineStore } from "pinia";

export const useUserDataStore = defineStore("userData", {
    state: () => {
        return {
            valid: false,
            user: {
                uid: null,
                displayName: '',
                email:'',
                lastLogin: '',
                userid: 0,
                orgId: 0,
                orgName: '',
                roleId: 0,
                roleName: '',
                roleEnum: '',
                roleGroupEnum: '',
                //isFirstTime: false,
                //authProvider: '',
                //isVerified: false,
                //favoriteModuleId: 0,
            },
            originalUser: {
                uid: '',
                displayName: '',
                email:'',
                lastLogin: '',
                userid: 0,
                orgId: 0,
                orgName: '',
                roleId: 0,
                roleName: '',
                roleEnum: '',
                roleGroupEnum: '',
                //isFirstTime: false,
                //authProvider: '',
                //isVerified: false,
                //favoriteModuleId: 0,
            },
            isStateFetchComplete: false,
            isBackstageMode: false,
            isBackstageDemoView: false,
            lastActivityTimestamp: null,
        }
    },
    actions: {
        setUid(uid) {
            this.user.uid = uid;
        },
        setUserData(userData) {
            this.user = userData;
            this.originalUser = userData;
            //Currently utilizes populateUserDetails GCF
            //After utilizing firebase to retrieve UID, we will pass UID to getUserDetailsByUID
            //This GCF calls the "formatUserObj" currently, which handles the values included above.
        },
        updateUserData () {
            //Should this include updateUserName?
        },
        updateUserName () {
            //Combine with above?
        },
        morphUser () {
            //Backstage
        },
        clearMorph () {
            //Exit Backstage
        },
        setLogoutTimer () {
            //Inactivity Timer set upon login
        },
        handleSignout () {
            //Process to clear state upon signout. This is also intertwined with the inactivity timer.
        },
        setFirstTimeUserStatus() {
            //Update First Time Status in the Database
        },
        setVerified () {
            //Review what this references with the team.
        },
        setFavoriteModule () {
            //Sets the module ID for user's favorite module.
        },
        setIsBackstageDemoView () {
            //is this used? review with team.
        },
    },
    getters: {
        isValid: (state) => { return this.isValid(state.valid)},
        isVerified: (state) => { return this.isVerified(state.isVerified)},
        isFirstTime: (state) => { return this.isFirstTime(state.isFirstTime)},
        getIsBackstageMode: (state) => { return this.isBackstageMode(state.isBackstageMode)},
        getUserData: (state) => { return this.getUserData(state.user) },
        getOriginalUserData: (state) => {
            if (!state.originalUser || !state.originalUser.userId) {
                return this.getUserData(state.user);
            } else {
                return this.getOriginalUserData(state.originalUser)
            }
        },
        getFavoriteReport: (state) => { return this.getFavoriteReport(state.favoriteReportId)},
        getLastActivityTimestamp: (state) => { return this.getLastActivityTimestamp(state.lastActivityTimestamp)},
    }
});