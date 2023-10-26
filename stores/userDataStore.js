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
                isFirstTime: false,
                authProvider: '',
                isVerified: false,
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
                isFirstTime: false,
                authProvider: '',
                isVerified: false,
                //favoriteModuleId: 0,
            },
            isStateFetchComplete: false,
            isBackstageMode: false,
            isBackstageDemoView: false,
            lastActivityTimestamp: null,
        }
    },
    actions: {
        setUserUid(state, uid) {
            state.userUid = uid;
        },
        setUserData: async function (context, userUid){
            let uid = context.state.user.uid || this.$fire.auth.currentUser.uid;

            if (!uid) {
                console.log("uid is null");
                throw errorCard;
            }
            if (this.$fire.auth.currentUser.uid === null) {
                console.log("uuid is null");
                throw errorCard;
            }
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await this.$getUserDetailsByUID(uid);

                    var userResponseObj = null;
                    if (response && response.data && response.data.userId > 0) {
                        userResponseObj = response.data;
                    }
                    var userObj = {
                        firstTime: userResponseObj ? userResponseObj.isFirstTime : true,
                        isVerified: userResponseObj ? userResponseObj.isVerified : false,
                        userId: userResponseObj ? userResponseObj.userId : 0,
                        displayName: userResponseObj ? userResponseObj.displayName : "",
                        orgId: userResponseObj ? userResponseObj.orgId : 0,
                        orgName: userResponseObj ? userResponseObj.orgName : "",
                        roleId: userResponseObj ? userResponseObj.roleId : 0,
                        roleName: userResponseObj ? userResponseObj.roleName : "",
                        roleEnum: userResponseObj ? userResponseObj.roleEnum : "",
                        roleGroupEnum: userResponseObj ? userResponseObj.roleGroupEnum : "",
                        authProvider: userResponseObj ? userResponseObj.authProvider : "",
                        favoriteReportId: userResponseObj ? userResponseObj.favoriteReportId : 0,
                        isStateFetchComplete: !!userResponseObj,
                    };
                    /*var userObj = {
                        firstTime: userResponseObj ? userResponseObj.isFirstTime : true,
                        isVerified: userResponseObj ? userResponseObj.isVerified : false,
                    };*/
                    if(this.$fire.auth.currentUser.displayName == null && userObj.displayName != null) {
                        this.$fire.auth.currentUser
                            .updateProfile({
                                displayName: userObj.displayName,
                            })
                            .then(() => {

                            })
                            .catch((error) => {
                                console.error("Error updating display name:", error);
                            });
                    }
                    if (!context.state.isBackstageMode) {
                        context.commit("setUserDatabaseDetails", userObj);
                    }
                    resolve(userObj);
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            })
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