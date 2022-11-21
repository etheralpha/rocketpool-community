---
layout: default
title: Community Projects
description: A list of community projects for Rocket Pool.
keywords: projects, rocket, pool, community
permalink: /projects/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Community Projects</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A list of community projects for Rocket Pool.
    </p>
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  {%- assign projects_by_title = site.data.projects | sort_natural: "title" -%}
  {%- for project in projects_by_title -%}
    <div class="row justify-content-center">
        <div class="col col-lg-6 col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              {%- case project.status -%}
                {%- when "development" -%}
                  <span class="badge rounded-pill bg-warning float-end">In Development</span>
                {%- when "live" -%}
                  <span class="badge rounded-pill bg-success float-end">Live</span>
                {%- when "abandoned" -%}
                  <span class="badge rounded-pill bg-secondary float-end">Abandoned</span>
                {%- when "deprecated" -%}
                  <span class="badge rounded-pill bg-secondary float-end">Deprecated</span>
                {%- else -%}
              {%- endcase -%}
              <h5 class="card-title">{{project.title}}</h5>
              <p class="card-subtitle mb-3">
                <small class="text-muted">Owner: {{project.owner}}</small>
              </p>
              <p class="card-text">{{project.description}}</p>
              <a href="{{project.link}}" class="{%- unless project.link -%}link-disabled{%- endunless -%}">View</a>
              |
              <a href="{{project.contact_url}}" class="{%- unless project.contact_url -%}link-disabled{%- endunless -%}">Contact</a>
              |
              <a href="{{project.repo_url}}" class="{%- unless project.repo_url -%}link-disabled{%- endunless -%}">Github</a>
              |
              <a href="{{project.donate_url}}" class="{%- unless project.donate_url -%}link-disabled{%- endunless -%}">Donate</a>
            </div>
          </div>
        </div>
    </div>
  {%- endfor -%}
</section>