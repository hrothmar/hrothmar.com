---
layout: basic-layout.html
pagination:
  data: collections.post
  size: 10
  reverse: true
  alias: posts
---

{% for post in posts %}
  <article>
    <h1>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </h1>
    <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
  </article>
{% endfor %}