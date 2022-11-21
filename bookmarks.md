---
layout: default
title: Bookmarks
description: A collection of special moments throughout Rocket Pool's history.
keywords: bookmark, pin, history, rocket, pool, rpl
permalink: /bookmarks/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool Bookmarks</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of special moments throughout Rocket Pool's history.
      <br>
    </p>
    <p>
      <small><em>Total Bookmarks: {{site.data.bookmarks.size}}</em></small>
    </p>
    <!-- <a href="/" class="btn btn-outline-dark btn-lg px-4 m-1"></a> -->
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  <div class="row row-cols-auto justify-content-center">
    {%- for bookmark in site.data.bookmarks -%}
      <div class="col d-flex align-items-stretch">
        <div class="card mb-3" style="width: 12rem;">
          {%- capture dataTargets -%}
            data-bs-toggle="modal" 
            data-bs-target="#detailsModal" 
            data-bs-title="{{bookmark.title}}" 
            data-bs-link="{{bookmark.link}}" 
            data-bs-imgurl="{{bookmark.img_url}}" 
            data-bs-date="{{bookmark.date}}" 
          {%- endcapture -%}
          <img data-src="/{{bookmark.img_url}}" class="card-img-top mx-auto d-block lazyload" 
            style="height: 12rem; object-fit: contain; cursor: pointer; background: #36393f;" {{dataTargets}}>
          <div class="card-body d-flex align-items-start flex-column">
            <p class="card-subtitle lh-1 mt-1 text-muted"><small>{{bookmark.date}}</small></p>
            <h6 class="card-title mt-2 mb-auto">{{bookmark.title}}</h6>
            <div>
              <a href="{{bookmark.link}}" class="btn btn-sm btn-outline-dark mt-3">Link</a>
              <a href="{{bookmark.link}}" class="btn btn-sm btn-outline-dark mt-3" {{dataTargets}}>
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</section>


<!-- Modal -->
<div class="modal fade" id="detailsModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="modalTitle" class="modal-title"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <img id="modalImg" src="" class="card-img-top mx-auto d-block" style="object-fit: contain; background: #36393f;">
            <div id="modalType" class="mt-1"></div>
          </div>
          <div class="mb-3">
            <p class="card-subtitle lh-1 text-muted">
              <small>Date: 
                <span id="modalDate"></span>
              </small>
            </p>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a class="btn btn-outline-dark" data-bs-dismiss="modal">Close</a>
        <a id="modalLink" href="" class="btn btn-dark">Link</a>
      </div>
    </div>
  </div>
</div>