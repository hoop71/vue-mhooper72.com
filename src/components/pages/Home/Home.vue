<template>
<div>
  <body class="profile-page sidebar-collapse">
  <div class="wrapper">
        <div class="page-header page-header-small" filter-color="">
            <div class="page-header-image" data-parallax="true" style="background-image: url('/dist/static/img/cover.jpg');">
            </div>
            <div class="container">
                <div class="content-center">
                    <div class="photo-container">
                        <img src="/dist/static/img/matt.jpg" alt="">
                    </div>
                    <h3 class="title">Matt Hooper</h3>
                    <p class="category">Web Developer | Startup Launch</p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <h2 class="title">About me</h2>
                <h5 class="description" id="aboutme">As a child, to avoid studying for math class, I programed my TI-83 to do the math for me. As an adult, to avoid the rat race, I make amazing web applications and help entrepreneurs take their first steps. Let’s make something awesome together.</h5>
            </div>
        </div>        

        <div class="section" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                        <h2 class="title text-center">My Work / Life</h2>
                        <div class="nav-align-center">
                            <ul class="nav nav-pills nav-pills-success" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active no-box" data-toggle="tab" href="#gallery" role="tablist" id="viewProductButton">
                                        <i class="now-ui-icons tech_laptop" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#photos" role="tablist">
                                        <i class="now-ui-icons location_world" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <!-- Tab panes -->
                <div class="tab-content gallery">
                    <div class="tab-pane active" id="gallery" role="tabpanel">
                        <div class="col-md-10 ml-auto mr-auto">
                            <div class="row collections">
                                <div class="col-md-6">
                                    <div class="card no-bm">
                                        <img src="/dist/static/img/logbook.jpg" alt="" class="card-img-top img-raised" id="">
                                        <div class="card-footer row">
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/laptop.svg" alt="Web Development" rel="tooltip" title="Web Development" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/js.svg" alt="Javascript" rel="tooltip" title="Javascript" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/bootstrap4.png" alt="Bootstrap 3" rel="tooltip" title="Bootstrap 3" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/firebase.svg" alt="Firebase" rel="tooltip" title="Firebase" data-placement="top">
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                    <div class="card no-bm">
                                        <img src="/dist/static/img/xg.jpg" alt="" class="card-im-top img-raised">
                                        <div class="card-footer row">
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img class="mx-auto" src="/dist/static/icons/laptop.svg" alt="Web Development" rel="tooltip" title="Web Development" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/rocket-ship.svg" alt="Startup Launch" rel="tooltip" title="Startup Launch" data-placement="top">
                                                </div>
                                            </div>                                            
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/bizdev.svg" alt="Business Development" rel="tooltip" title="Business Development" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/strategy.svg" alt="Business Strategy" rel="tooltip" title="Business Strategy" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/g-suite.png" alt="G-Suite" rel="tooltip" title="G-Suite" data-placement="top">
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card no-bm">
                                        <img src="/dist/static/img/asap.jpg" alt="" class="img-raised">
                                        <div class="card-footer row">
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/laptop.svg" alt="Web Development" rel="tooltip" title="Web Development">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/rocket-ship.svg" alt="Startup Launch" rel="tooltip" title="Startup Launch" data-placement="top"> 
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/g-suite.png" alt="G-Suite" rel="tooltip" title="G-Suite" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/bootstrap4.png" alt="Bootstrap 4" rel="tooltip" title="Bootstrap 4" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/firebase.svg" alt="Firebase" rel="tooltip" title="Firebase" data-placement="top">
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                    <div class="card no-bm">
                                        <img src="/dist/static/img/betagig.jpg" alt="" class="img-raised">
                                        <div class="card-footer row">
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/rocket-ship.svg" alt="Startup Launch" rel="tooltip" title="Startup Launch" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/g-suite.png" alt="G-Suite" rel="tooltip" title="G-Suite" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/bizdev.svg" alt="Business Development" rel="tooltip" title="Business Development" data-placement="top">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="text-center thumbnail">
                                                    <img src="/dist/static/icons/strategy.svg" alt="Business Strategy" rel="tooltip" title="Business Strategy" data-placement="top">
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="photos" role="tabpanel">
                        <div class="col-md-10 ml-auto mr-auto">
                            <div class="row collections">
                                <div class="col-md-6">
                                    <div class="card no-bm">
                                        <img src="/dist/static/img/pm.jpg" alt="" class="img-raised">
                                        <div class="card-footer text-center">
                                            <a href="https://goo.gl/TLZ24w" target="_blank"><p>50°28'22.5"S | 73°02'52.8"W</p></a>
                                        </div>
                                    </div>
                                    <div class="card no-bm">
                                        <img src="/dist/static/img/colo.jpg" alt="Highland Mary Lakes" class="img-raised">
                                        <div class="card-footer text-center">
                                            <a href="https://goo.gl/Tkbjhc" target="_blank"><p>37°45'26.3"N | 107°34'54.3"W </p></a> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card no-bm">
                                        <img src="/dist/static/img/thai.jpg" alt="วัดสุนทรธรรมทาน" class="img-raised">
                                        <div class="card-footer text-center">
                                           <a href="https://goo.gl/gMQhAJ" target="_blank"><p>13°45'26.7"N | 100°30'39.5"E</p></a> 
                                        </div>
                                    </div>
                                    <div class="card no-bm">
                                        <img src="/dist/static/img/roadahead.jpg" alt="Lagunas Miscanti y Miñiques" class="img-raised">
                                        <div class="card-footer text-center">
                                            <a href="https://goo.gl/iMv22z" target="_blank" class=""><p>23°44'19.4"S | 67°47'30.6"W</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <div class="landing-page section" id="focus">
            <div class="section-team text-center">
                <div class="container">
                    <h2 class="title">Focus Areas</h2>
                    <div class="team">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="team-player">
                                    <img src="/dist/static/icons/laptop.svg" alt="Thumbnail Image" class="rounded-circle img-fluid img-raised">
                                    <h4 class="title">Web Development</h4>
                                    <p class="category text-primary">1, 2, 3 - Launch</p>
                                    <p class="description">Fast, fetching and functional websites deployed with the most modern frameworks. Mobile-first design with a striking desktop presence. Dynamic and scalable to grow with you whether your market is local or global. </p>
                                    <p class="description">tl:dr: A beautiful website in no time, delivered to you with a bow.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="team-player">
                                    <img src="/dist/static/icons/g-suite.png" alt="Thumbnail Image" class="rounded-circle img-fluid img-raised">
                                    <h4 class="title">G-Suite</h4>
                                    <p class="category text-primary">Gmail, Drive, Docs and more</p>
                                    <p class="description">A set of intelligent apps to connect the people on your team, no matter where in the world they are. Fast, functional and redundant, G-Suite is the market-leading and most cost-effective productivity solution</p>
                                    <p class="description">tl:dr: Microsoft who? Your work in the cloud, in real-time.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="team-player">
                                    <img src="/dist/static/icons/rocket-ship.svg" alt="G-Suite Image" class="rounded-circle img-fluid img-raised">
                                    <h4 class="title">Startup Launch</h4>
                                    <p class="category text-primary">Strategy, Launch & Operations</p>
                                    <p class="description">Launch with a strategy to match your unique capabilities and limitations as a young company. Let’s craft agile support from launch to scale whether you’re a startup, nonprofit, retailer or multinational operator.                    
                                    <p class="description">tl:dr: Launching a business is hard. I've done it. I can help.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div class="landing-page">
        <div class="section bottom-padding section-contact-us text-center" id="contact">
            <div class="container">
                <h2 class="title">What's your project?</h2>
                <p class="description">Let's do this</p>
                <div class="row">
                    <div class="col-lg-6 text-center col-md-8 ml-auto mr-auto">
                        <form action="https://formspree.io/mhooper72@gmail.com" method="POST">
                        <div class="input-group input-lg">
                            <span class="input-group-addon">
                                <i class="now-ui-icons users_single-02"></i>
                            </span>
                            <input type="text" class="form-control" name="name" placeholder="First Name..." required>
                        </div>
                        <div class="input-group input-lg">
                            <span class="input-group-addon">
                                <i class="now-ui-icons ui-1_email-85"></i>
                            </span>
                            <input type="email" class="form-control" name="_replyto" placeholder="Email..." required>
                        </div>
                        <div class="textarea-container">
                            <textarea class="form-control" name="name" rows="4" cols="80" placeholder="Type a message..." required></textarea>
                        </div>
                        <div class="send-button">
                            <input type="submit" value="Send" class="btn btn-info btn-round btn-block btn-lg">
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </body>
</div>
</template>

<script>
export default {}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->


