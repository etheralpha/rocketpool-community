---
layout: default
title: Contests
description: A collection of Rocket Pool community contests.
keywords: contests, rocket, pool, rpl
permalink: /contests/
---


<!-- - add in progress/complete labels
- create details model
  - move the entries to the model and remove from page
  - add results image/link -->

<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool Contests</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of Rocket Pool community contests.
      <br>
    </p>
    <p>
      <small><em>Total Contests: {{site.data.contests.size}}</em></small>
    </p>
    <!-- <a href="{/" class="btn btn-outline-dark btn-lg px-4 m-1"></a> -->
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  <div class="row rrow-cols-2">
    {% for contest in site.data.contests %}
      <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card mb-3">
          <div class="card-body d-flex align-items-start flex-column">
            <h5 class="card-title mb-3">{{contest.contest}}</h5>
            <p class="card-subtitle mb-3 lh-1 text-muted">
              <small>{{contest.date}}</small>
            </p>
            <p class="card-text pb-3 mb-auto">{{contest.description}}</p>
            <p class="card-subtitle mb-3">
              <strong>Reward: {{contest.reward}}</strong>
            </p>
            {% assign winner = contest.entries | first %}
            <p class="card-subtitle mb-3">
              <strong>Winner: {{winner.creator}}</strong>
            </p>
            <p class="card-subtitle mb-3">
              <a href="{/{{winner.img_url}}">               
                <img data-src="{/{{winner.img_url}}" class="card-img-top mx-auto d-block lazyload" 
                  style="max-height: 18rem; object-fit: contain; cursor: pointer;">
              </a>
            </p>
            <p class="card-subtitle mb-3">
              <strong>Entries:</strong>
            </p>
            <div class="row row-cols-auto">
              <div class="col d-flex align-items-stretch" style="overflow-x: scroll;">
                {% for entry in contest.entries %}
                  <!-- <a href="{/{{entry.img_url}}">  -->
                    <img data-src="{/{{entry.img_url}}" title="By: {{entry.creator}}" 
                      class="card-img-top mx-auto d-block px-1 lazyload" 
                      style="height: 6rem; object-fit: contain; border-radius: 100%;">
                  <!-- </a> -->
                {% endfor %}
              </div>
            </div>
            <div>
              <a href="{{contest.link}}" class="btn btn-sm btn-outline-dark mt-3">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</section>




















