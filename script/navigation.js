var links = [
  {
    name: '<strong>josh</strong>and<strong>james</strong>',
    href: '/'
  }, {
    name: 'Forwards',
    href: '/forwards/'
  }, {
    name: 'Midfielders',
    href: '/midfielders/'
  }, {
    name: 'Defenders',
    href: '/defenders/'
  }, {
    name: 'Goalkeepers',
    href: '/goalkeepers/'
  }
];

$(document).ready(function () {
  var targets = document.getElementsByClassName('_navigation');
  var i;
  var j;
  var string = '';
  for (i = 0; i < targets.length; i++) {
    for (j = 0; j < links.length; j++) {
      string = '<a href="' + links[j].href + '"><div class="w3-button">' + links[j].name + '</div></a>';
      $(targets[i]).append(string);
    }
  }
});
