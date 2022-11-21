<section id="intro" class="container py-5 my-5">
  <div markdown="1" class="table-responsive">

  | Link              | Name              | Description              | Tags              |
  | ----------------- | ----------------- | ------------------------ | ----------------- | {% for resource in site.data.resources %}
  | {{resource.link}} | {{resource.name}} | {{resource.description}} | {{resource.tags}} | {% endfor %}

  </div>
</section>