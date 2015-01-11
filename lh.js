var last;
function save(){
  if (last) {window.clearInterval(last)}
  window.localStorage.setItem('backup', document.getElementsByTagName('iframe')[1].contentDocument.getElementById('tinymce').innerHTML)
  document.getElementById('status').innerHTML="&#128338; saving every second"
  last = setInterval(save,1000)
}

function restore(){
  console.log('ran restore()')
  document.getElementsByTagName('iframe')[1].contentDocument.getElementById('tinymce').innerHTML = window.localStorage.getItem('backup')
}

function printBackup(){
  header= '<head><title>lil hero</title><style>html{font-family: helvetica;}div{background-color:#eeeeee; padding: 1em;}</style></head><body><h1>Saved by &#128124; lil hero</h1><h3>Post Text</h3><div>' // this can be loaded from an outside AJAX source?
  t = window.localStorage.getItem('backup')
  window.open('data:text/html;charset=utf-8,'+header+ encodeURIComponent(t) )
}

function createHeader(){
  div = document.createElement('div');
  div.height="50px";
  div.style.position="fixed";
  div.style.backgroundColor='#DECA59';
  div.style.padding='5px';
  div.style.right='0px';
  h1 = document.createElement('h1');
  h1.innerHTML="<a href='https://rawgit.com/skylineproject/lilhero/master/index.html'>&#128124; lil hero</a>"
  h1.style.paddingBottom="10px";
  a1 = document.createElement('a');
  a1.href="javascript:save()";
  a1.innerHTML = "&#9654; save";
  a2 = document.createElement('a');
  a2.href="javascript:restore()";
  a2.innerHTML="&#8617; restore";
  a3 = document.createElement('a');
  a3.href="javascript:printBackup()";
  a3.innerHTML = "&#8599; open last save in new window";
  a3.style.textDecoration = 'none';
  p = document.createElement('p');
  p.innerHTML = '&#128683; not saving';
  p.id ='status';
  div.appendChild(h1);
  div.appendChild(a1);
  div.appendChild(document.createElement('br'));
  div.appendChild(a2);
  div.appendChild(document.createElement('br'));
  div.appendChild(a3);
  div.appendChild(document.createElement('br'));
  div.appendChild(p);
  if (window.location.host == 'www.tumblr.com'){
    document.querySelectorAll('div[data-token="body-plexi"]')[0].appendChild(div)
  }
  else {
    document.body.appendChild(div)
  }
  console.log('lil hero initlaized')
}
createHeader();
