<template>
    
  <div id="app">
    <div class="home">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-info fixed-top navbar-transparent " color-on-scroll="400">
        <div class="container">
            <div class="navbar-translate">
                <a class="navbar-brand" href="#" rel="tooltip" title="" data-placement="bottom">
                    mhooper72.com
                </a>
                <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="assets/img/blurred-image-1.jpg">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#focus">Focus Areas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Hablas Espanol?" data-placement="bottom" href="indexes.html" target="">
                            <img src="dist/static/icons/es.png">
                            <p class="d-lg-none d-xl-none">Espanol</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/mhooper71" target="_blank">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <p class="d-lg-none d-xl-none">Instagram</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Find me on LinkedIn" data-placement="bottom" href="https://www.linkedin.com/in/mhooper72" target="_blank">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                            <p class="d-lg-none d-xl-none">LinkedIn</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Find me on GitHub" data-placement="bottom" href="https://github.com/hoop71" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                            <p class="d-lg-none d-xl-none">GitHub</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
  </div>
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
