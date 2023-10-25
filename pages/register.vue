<template>
  <div class="">
    <div class="row no-margin register-card">
      <div class="icon-font text-center">
        <i class="fa fa-spinner fa-spin"/> <!--v-if="loading"-->
      </div>
      <Card style="width: 22em; height: 44em;" unstyled>
        <template #header>
          <img class="mt-1" src="../static/images/bc-logo-transparent%201.svg" alt="Card image" width="100px" />
        </template>
        <template #title><h4>Register an Organization</h4></template>
        <template #subtitle><p>Bear Cognition gives your team powerful analytics - a place where
          data can be visualized and shared. To create a new organization fill
          out the information.</p></template>
        <template #content>
          <p>
            <Button label="Already have an account? Sign In!" severity="help" text @click="navigateToLogin"/>
            <form id="register-form" onsubmit="return false;">
              <div class="form-group">
                <div class="input-group mb-2">
                  <InputText class="form-control form-control-md" type="text" placeholder="First Name" v-model="firstName" required="true" />
                </div>
                <div class="input-group mb-2">
                  <InputText class="form-control form-control-md" type="text" placeholder="Last Name" v-model="lastName" required="true" />
                </div>
                <div class="input-group mb-2">
                  <InputText class="form-control form-control-md" type="text" placeholder="Email" v-model="email" required="true" />
                </div>
                <div class="input-group mb-2">
                  <InputText class="form-control form-control-md" type="text" placeholder="Password" v-model="newPassword" required="true" />
                </div>
                <div class="input-group mb-2">
                  <InputText class="form-control form-control-md" type="text" placeholder="Verify Password" v-model="newPasswordVerify" required="true" />
                </div>
                <div class="input-group mb-2">
                  <InputText class="form-control form-control-md" type="text" placeholder="Organization Name" v-model="orgName" required="true" />
                </div>
                <div class="input-group mb-2">
                  <InputText class="form-control form-control-md" type="text" placeholder="Org Phone Number" v-model="newOrgPhone" required="true" />
                </div>
              </div>
            </form>
          </p>
        </template>
        <template #footer>
          <div class="form-check pb-1" style="font-size: 12px">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" @change="!checkboxChanged" v-model="checkboxChecked" />
            <label class="form-check-label" for="flexCheckDefault">
              I agree to the <a target="_blank" href="https://www.bearcognition.com/terms-of-use">terms of use </a>and <a target="_blank" href="https://www.bearcognition.com/privacy-policy">privacy policy.</a>
            </label>
          </div>
          <Button class="form-control btn btn-success btn-md mt-2" label="Register an Organization" severity="success" :disabled="!checkboxChecked"/>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
/*const { email, password, login, error } = useRegisterOrg();*/ //Register Org Cloud Function
//composable for routing back to login page button.
const router = useRouter();
const navigateToLogin = () => {
  router.push('/login');
};
//composable for checkbox/disable register button functionality
const checkboxChecked = ref(false);
const checkboxChanged = () => {
  checkboxChecked.value = !checkboxChecked.value;
};
</script>

<style>
.register-card {
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  text-align:center;
  border-radius: 22px;
  margin-top: 25px;
  padding: 14px;
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #fff;
}
</style>