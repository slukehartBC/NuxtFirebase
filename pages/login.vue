<template>
  <div class="">
    <div class="row no-margin auth-card"> <!--v-else-->
      <div class="icon-font text-center">
        <i class="fa fa-spinner fa-spin" /> <!--v-if="loading"-->
      </div>
      <!--      <Message severity="error" :closable="true">{{ errorMsg }}</Message>--> <!--v-if="errorMsg && errorMsg.length > 0"-->
      <Card style="width: 20em; height: 20em;" unstyled>
        <template #header>
          <img src="../static/images/bc-logo-transparent%201.svg" alt="Card image" width="100px" />
        </template>
        <template #title><h4>Login</h4></template>
        <template #subtitle></template>
        <template #content>
          <p>
            <form class="auth-container" id="login-form" onsubmit="return false;">
              <div class="input-group">
                <InputText class="form-control form-control-md mb-1" type="text" placeholder="Email" v-model="email" required="true" id="userEmail" /> <!--@keyup.enter="loginWithEmail()"-->
              </div>
              <div class="input-group">
                <InputText class="form-control form-control-md mb-1" type="password" placeholder="Password" v-model="password" required="true" id="userPassword" /> <!--@keyup.enter="loginWithEmail()"-->
              </div>
              <Button class="form-control btn btn-success btn-md mt-2" label="Continue" severity="success" @click="login"/>
            </form>
          </p>
        </template>
        <template #footer>
          <div class="justify-content-between">
            <Button class="" label="Forgot Password" severity="help" text @click="navigateToForgotPassword"/> <!--@click="forgotPassword()"-->
            <Button class="" label="Sign Up" severity="help" text @click="navigateToSignUp"/> <!--@click="isRegisteringOrg"-->
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
/*import { useRouter } from 'nuxt';*/
import {signInUser} from "~/composables/useFirebaseAuth.ts"

definePageMeta({
  layout: "auth",
});
const { email, password } = await signInUser(email, password);
const router = useRouter();

/*const credentials = await createUser(email,password);
console.log(credentials)*/

const navigateToForgotPassword = () => {
  router.push('/password');
};
const navigateToSignUp = () => {
  router.push('/register');
};

</script>

<style>
.background-image {
  opacity: 1;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url("../../../P3-Nuxt3/p3-nuxt3/static/images/p3-background.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.auth-card {
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
