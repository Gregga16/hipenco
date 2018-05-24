$( document ).ready(function(){
  var userfeed = new Instafeed({
    get: 'user',
    userId: '5757010050',
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: '5757010050.16273a3.93baf13b87f446e3a87651b69cb28e8b',
    sortBy: 'most-recent',
    template: '' +
    '<div class="col-lg-4 col-md-6">\n' +
    '      <div class="card p-3">\n' +
    '        <a href="{{link}}" title="{{caption}}" target="_blank"><img class="card-img-top image-background" src="{{image}}"></a>\n' +
    '        <div class="card-body d-flex flex-column">\n' +
    '          <div class="text-muted">{{caption}}</div>\n' +
    '          <div class="d-flex align-items-center pt-5 mt-auto">\n' +
    '            <div class=" avatar-md mr-3"><img src="assets/images/hipenco.png"></div>\n' +
    '            <div>\n' +
    '              <a href="./profile.html" class="text-default">hipenco_</a>\n' +
    '            </div>\n' +
    '            <div class="ml-auto text-muted">\n' +
    '              <a href="{{link}}" target="_blank" class="icon d-none d-md-inline-block ml-3"><i class="ion-heart mr-1"></i>{{likes}}</a>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>',
  });
  userfeed.run();
});
