<template>
  <div class="">
    <div class="row no-margin forgot-card"> <!--v-else-->
      <div class="icon-font text-center">
        <i class="fa fa-spinner fa-spin" /> <!--v-if="loading"-->
      </div>
      <!--      <Message severity="error" :closable="true">{{ errorMsg }}</Message>--> <!--v-if="errorMsg && errorMsg.length > 0"-->
      <Card style="width: 20em; height: 20em;" unstyled>
        <template #header>
          <img src="../static/images/bc-logo-transparent%201.svg" alt="Card image" width="100px"/>
        </template>
        <template #title><h4>Can't Login</h4></template>
        <template #subtitle>
          <p>A recovery email will be sent to the email below.</p> </template>
        <template #content>
          <form class="password-container" id="password-form" onsubmit="return false">
            <div class="input-group">
              <InputText class="form-control form-control-md mb-1" type="text" placeholder="Recovery Email" v-model="email" required="true" id="forgotEmail" />
            </div>
            <div class="input-group">
              <Button class="form-control btn btn-success btn-md mt-2" label="Send Recovery Link" severity="success"/> <!--@click="sendForgotEmail()"-->
            </div>
          </form>
        </template>
        <template #footer>
          <Button label="Return to Login" severity="help" text @click="navigateToLogin"/>
        </template>
      </Card>
      <!--      <Message severity="success" :closable="true">Email has been sent successfully to {{ forgotEmail }}</Message>--> <!--v-if="emailSentSuccess"-->
      <!--      <Message severity="info" :closable="true">If the E-mail address was valid, a password reset link will be sent momentarily.</Message>--> <!--v-if="!emailSentSuccess && showFailure"-->
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
/*const { email, password, login, error } = useForgotEmail();*/ //Forgot Password Cloud function
const router = useRouter();
const navigateToLogin = () => {
  router.push('/login');
};

</script>

<style>
.forgot-card {
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