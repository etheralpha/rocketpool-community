---
layout: default
title: Resources
description: A collection of resources and tools to search or browse.
keywords: resources, directory, rocket, pool, rpl
permalink: /resources/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool Resources</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of resources and tools to search or browse.
    </p>
    <div class="row justify-content-center">
      <div class="col col-12 col-sm-10 col-md-8 col-lg-6 align-self-center mb-3">
        <input type="text" class="form-control" placeholder="Search" onkeyup="searchResources(this.value)">
      </div>
    </div>
    <div>
      {%- assign all_categories = "official, community" -%}
      {%- for resource in site.data.resources -%}
        {%- assign resource.categories = resource | downcase -%}
        {%- assign all_categories = all_categories | append: ", " | append: resource.categories -%}
      {%- endfor -%}
      {%- assign all_categories = all_categories | remove: " " | split: "," | uniq -%}
      {%- assign all_categories = all_categories | compact -%}
      {%- for category in all_categories -%}
        <div class="form-check form-check-inline">
          <input class="form-check-input" name="filter" type="checkbox" id="inlineCheckbox{{forloop.index}}" value="{{category}}" onchange="filterResources()">
          <label class="form-check-label" for="inlineCheckbox{{forloop.index}}">{{category | capitalize}}</label>
        </div>
      {%- endfor -%}
    </div>
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <div class="alert alert-warning d-none" role="alert">
    This page is still currently being worked on, please check back later.
  </div>
  {%- for resource in site.data.resources -%}
    <div class='resource mb-3 {{resource.categories | remove: " " | replace: ",", " "}}'>
      <h5 class="mb-0"><a href="{{resource.link}}">{{resource.title}}</a></h5>
      {{resource.description}}
      <small class="text-muted d-block text-truncate">{{resource.link | replace: "./..", site.url}}</small>
    </div>
  {%- endfor -%}
</section>