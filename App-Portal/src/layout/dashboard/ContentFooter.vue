<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="https://anciitk.in/">
            Academics and Career Council
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://iitkalumni.org/">
            Official IITK Alumni Association
          </a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="https://iitk.ac.in/">
            IIT Kanpur
          </a>
        </li>
      </ul>
      <div class="copyright">
        © {{year}} made by Sanyog Gupta for AnC.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
