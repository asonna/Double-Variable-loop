$(document).ready(function() {
  var tags = [['h1','a header'], ['p','a paragraph'], ['img','an image']];

  tags.forEach(function(tag){
    $(tag[0]).click(function() {
      alert("This is" + tag[1]);
    });
  });

  // var tags = ['h1','p','img'];
  // var comments = ["a header", "a paragraph", "an image"];
  // tags.forEach(function(tag){
  //   $("tag").click(function() {
  //     alert("This is" + comments[]);
  //   });
  // });

  });
  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
