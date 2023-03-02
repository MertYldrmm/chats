<template>
  <div id="googleButton"></div>
</template>

<script>
export default {
  mounted() {
    // initialize Google Sign in
    google.accounts.id.initialize({
      client_id: '819030540010-9vd46n8n3mn63ioqhcg4726qg4k4tkkd.apps.googleusercontent.com',
      callback: this.handleCredentialResponse, //method to run after user clicks the Google sign in button
      context: 'signin'
    })

    // render button
    google.accounts.id.renderButton(
        document.getElementById('googleButton'),
        {
          type: 'standard',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
          logo_alignment: 'center',
          width: 250
        }
    )
  },

  methods: {
    handleCredentialResponse(response) {
      alert('aaa');
      console.log(response);
      // call your backend API here

      // the token can be accessed as: response.credential
    }
  }
}
</script>


<style scoped>

</style>