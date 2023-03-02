<template>
  <div id="containerWrapper" class="sketchy">
    <div id="containerHeader">Profile</div>
    <div id="containerBody">
      <div id="userImage">
        <img src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="">
      </div>
      <div id="userInformation">
        <div id="userName">Name: {{}}</div>
        <div id="userMail">Mail: {{}}</div>
        <div id="userDepartment">Department:</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

#containerWrapper{
  height: 600px;
  width: 400px;
  margin: 7.5% auto;
  display: flex;
  flex-direction: column;
  flex: 1 10;
  padding: 1.5rem;
}

#containerHeader{
  height:10%;
  box-shadow: 0 3px 2px -2px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-family: 'Lobster', cursive;
}

#containerBody {
  display: flex;
  flex-direction: column;
  flex: 1 1;
  height: 100%;
}

#userImage {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 2px -2px gray;
}

#userImage img {
  height: 15rem;
  border-radius: 50%;
}

#userInformation {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: space-evenly;
}

.sketchy {
  display: inline-block;
  border: 3px solid #333333;
  font-size: 2.5rem;
  border-radius: 2% 6% 5% 4%/1% 1% 2% 4%;
  letter-spacing: 0.3ch;
  background: #ffffff;
  position: relative;
}
.sketchy::before {
  content: "";
  border: 2px solid #353535;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
  border-radius: 1% 1% 2% 4%/2% 6% 5% 4%;
}

</style>