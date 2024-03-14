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
}

:root {
  --primary-color: #1575cf;
}

.text-center {
  text-align: center;
}

.text-muted {
  font-size: .8rem;
}

.form-control {
  margin: 10px 0;
  font-size: 18px;
  font-size: 18px;
}

.form-control label {
  width: 80px;
  display: inline-block;
}

.form-control input {
  width: calc(100% - 90px);
  height: 30px;
  border: none;
  background-color: #ffffffd0;
  padding-left: 4px;
}

.btn {
  background: none;
  border: none;
  padding: 6px 30px;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: blue;
}

a {
  text-decoration: none;
}
a:visited{
  color: inherit;
}
a:hover{
  color: var(--primary-color);
}
</style>
<script>

</script>
