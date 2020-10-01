<div class="container">
        <!-- Post-->
        {% for object in object_list %}
        <div class="row d-flex align-items-stretch">
            {% if not forloop.first and not forloop.last %}
            <div ><a href="{{ object.get_absolute_url }}"><img src="{{ object.thumbnail.url}}" alt="..." width="340" height="400" style="margin-left:30px; margin-right:0px"></a></div>
            {% endif %}


          <div class="text col-lg-7">
            <div class="text-inner d-flex align-items-center">
              <div class="content">
                <header class="post-header">
                  <div class="category">
                    {% for cat in object.categories.all %}
                      <a href="{{ cat.get_absolute_url}}">{{ cat.title }}</a>
                    {% endfor %}

                    <a href="{{ object.get_absolute_url }}">
                    <h2 class="h4">{{ object.title }}</h2></a>
                  </div>
                </header>
                  <p ><a href="{{ object.get_absolute_url }}">{{object.content|linebreaks|truncatechars:300}}</a></p>
                   <a href="{{ object.get_absolute_url }}" class="btn btn-primary"> Continue Reading </a>
                <footer class="post-footer d-flex align-items-center"><a href="{% url 'user-posts' object.author %}" class="author d-flex align-items-center flex-wrap">


          {% load static %}
                    <div class="avatar"><img src="{{ object.author.profile.profile_pic.url }}" alt="..." class="img-fluid"></div>
                    <div class="title" ><span>{{object.author.first_name}} {{object.author.last_name}}</span></div></a>
                  <div class="date"><i class="icon-clock"></i> {{object.date_posted|timesince}} ago </div>
                    <div class="views"><i class="icon-eye"></i> {{ object.view_count}}</div>
                  <div class="comments"><i class="icon-comment"></i>#</div>

                </footer>
              </div>
            </div>
          </div>
            {% if forloop.first or forloop.last %}
                <div ><img src="{{ object.thumbnail.url }}" alt="..." style = "margin-left:20px; margin-right:0px" width="340" height="400"></div>
            {% endif %}

        </div>
          <br>
       {% endfor %}
