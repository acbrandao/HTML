<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>VueJS  Web Page</title>
  <meta name="description" content="VueJS  Web Page">
  <meta name="author" content="abrandao.com">
 <!-- link rel="stylesheet" href="css/styles.css" -->
</head>
<body>
 <h1> Vuejs  Starter Page </h1>
<div id="app">
  {{ message }}
</div>



<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- production version, optimized for size and speed -->
<!-- script src="https://cdn.jsdelivr.net/npm/vue"></script -- >
	
<!-- Vue code --->
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
 </script>

</body>
</html>