---
layout: default
title: Updates
description: 
keywords: 
permalink: /updates/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool Updates</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of updates and announcements from Reddit, Discord, and Twitter.
    </p>
  </div>
</header>


<!-- Twitter Feed -->
<section class="container py-4">
  <div class="row">
    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <a id="twitter" class="twitter-timeline" data-height="500" data-dnt="true" href="https://twitter.com/Rocket_Pool">Tweets by Rocket_Pool</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </div>
</section>


<!-- Divider -->
<div class="container py-4">
  <div class="row">
    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <hr>
    </div>
  </div>
</div>


<!-- Reddit Updates -->
<section class="container py-4">
  <div class="row">
    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <h2 id="reddit" class="mb-0">Reddit</h2>
      <p><small>Credit: u/Legitimate-Ship-4060 | discord@VGR</small></p>
      <div style="max-height: 250px; overflow-y: auto">
        <ul class="list-group">
          {%- for update in site.data.updates -%}
          <li class="list-group-item"><a href="{{update.link}}">{{update.title}}</a></li>
          {%- endfor -%}
        </ul>
      </div>
      {%- comment -%}
      <table class="table">
        <tbody>
          {%- for update in site.data.updates -%}
            <tr>
              <th><a href="{{update.link}}">{{update.title}}</a></th>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>
      <div class="list-group">
        <div style="max-height: 320px; overflow-y: auto">
          {%- for update in site.data.updates -%}
            <a href="{{update.link}}" class="list-group-item list-group-item-action" disabled>
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{update.title}}</h5>
                <!-- <small>3 days ago</small> -->
              </div>
              <p class="mb-1">{{update.description}}</p>
            </a>
          {%- endfor -%}
        </div>
      </div>
      {%- endcomment -%}
    </div>
  </div>
</section>


<!-- Divider -->
<div class="container py-4">
  <div class="row">
    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <hr>
    </div>
  </div>
</div>


<!-- Dicord Announcements -->
<section class="container py-4">
  <div class="row">
    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <h2 id="discord">Discord</h2>
      <em>[awaiting embed code from team]</em>
    </div>
  </div>
</section>