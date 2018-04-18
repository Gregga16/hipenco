$( document ).ready(function(){
  var userfeed = new Instafeed({
    get: 'user',
    userId: '5757010050',
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: '5757010050.16273a3.93baf13b87f446e3a87651b69cb28e8b',
    sortBy: 'most-recent',
    template: '' +
    '<div class="col-sm-6 col-lg-3">\n' +
    '  <div class="card p-3">\n' +
    '    <div class="image-background col-lg-12">\n' +
    '      <a href="{{link}}" title="{{caption}}" target="_blank" class="mb-3">\n' +
    '        <img src="{{image}}" alt="{{caption}}" class="img-fluid"/>\n' +
    '      </a>\n' +
    '    </div>\n' +
    '    <div class="custom-bottom">\n' +
    '      <div class="custom-name">\n' +
    '        <div class="caption">{{caption}}</div>\n' +
    '      </div>\n' +
    '      <div class="custom-likes">\n' +
    '        <a href="{{link}}" target="_blank" class="icon d-md-inline-block ml-3"><i class="ion-heart"></i> {{likes}}</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>',
  });
  userfeed.run();
});

