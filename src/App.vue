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
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  //background: url(http://api.0cs.cc) no-repeat;
  background: linear-gradient(to bottom, #4fecff, #1e69fa) center;
}

:root {
  --primary-color: #007bff;
}

.text-center {
  text-align: center;
}

.container h2 {
  position: relative;
  padding: 0;
  //color: #fff;
  color: #000;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0 0 40px;
}

.container h2:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 80px;
  height: 4px;
  //background: #fff;
  background-color: black;
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
  //width: calc(100% - 90px);
  //height: 30px;
  //border: none;
  //background-color: #fff;
  //padding-left: 4px;
  //border-radius: 5px;
  width: 100%;
  //background: transparent;
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
  color: black;
}

.btn {
  //background: none;
  //border: none;
  //padding: 6px 30px;
  //cursor: pointer;
  //border-radius: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 24px;
  //background-color: var(--primary-color);
  //color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin: 0 auto;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
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
</style>
<script>

</script>
