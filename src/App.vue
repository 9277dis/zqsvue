<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
  box-sizing: border-box;
  text-decoration: none;
}

:root {
  --primary-color: #1e69fa;
  --from-color: #4fecff;
  --end-color: #1e69fa;
}

body {
  display: flex;
  width: 100vw;
  //height: 100vh;
  height: 100%;
  min-height: 100vh;
  background: url(@/assets/1615.jpg) no-repeat;
  //background: url(http://api.0cs.cc) no-repeat;
  background-size: 100% 100%;
  //background: linear-gradient(to bottom, var(--from-color), var(--end-color)) center no-repeat;
}


.text-center {
  text-align: center;
}

.container h2 {
  position: relative;
  padding: 0;
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
  margin: 0 0 40px;
}

.container h2:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100px;
  height: 4px;
  background: #fff;
  //background-color: black;
}

.text-muted {
  font-size: .8rem;
}

.form-control {
  margin: 10px 0;
  font-size: 18px;
}

.form-control label {
  width: 80px;
  display: inline-block;
}

.form-control input {
  width: 100%;
  border: none;
  padding: 10px 20px;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  outline: none;
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
}

input::placeholder {
  color: #fff;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 auto;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #1e64cd;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

a:hover {
  color: var(--primary-color);
}
.btn-danger{
  background-color: #ff6b6b;
  color: #fff;
}
.btn-danger:hover{
  background-color: #ff0000;
}
.btn-danger:active{
  background-color: #ff0000;
  box-shadow: none;
}
</style>
<script>

</script>
