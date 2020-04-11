document.addEventListener('DOMContentLoaded',init);

var input = '';
var order = '';
var price = 0;
var imgorder = '';
var i = 0;
var accept = 0;

function init()
{
  var top = document.getElementById("header").offsetTop;
  window.scrollTo(top, 0);
  $(':input').prop('disabled',true);
  document.getElementById("MilkTea").disabled = false;
  document.getElementById("GreenTea").disabled = false;
  document.getElementById("cancel1").disabled = false;
  document.getElementById("baht").disabled = false;
  document.getElementById("next").disabled = false;
  showdata();
}

function gotoSugar(drink) {
  input += drink;
  if (drink === '0')
  {
    order += 'Milk Tea';
    imgorder = 'image/mb1.png'
  }
  else if (drink === '1')
  {
    order += 'Green Tea';
    imgorder = 'image/mb2.png'
  }

  document.getElementById("MilkTea").disabled = true;
  document.getElementById("GreenTea").disabled = true;
  document.getElementById("cancel1").disabled = true;

  document.getElementById("100").disabled = false;
  document.getElementById("50").disabled = false;
  document.getElementById("cancel2").disabled = false;

  var top = document.getElementById('sugar').offsetTop;
  window.scrollTo(0, top);
  showdata();
}


function gotoBubble(sugar) {
  input += sugar;
  if (sugar === '0')
  {
    order += ' 100%';
  }
  else if (sugar === '1')
  {
    order += ' 50%';
  }
  document.getElementById("100").disabled = true;
  document.getElementById("50").disabled = true;
  document.getElementById("cancel2").disabled = true;
  
  document.getElementById("Add").disabled = false;
  document.getElementById("NotAdd").disabled = false;
  document.getElementById("cancel3").disabled = false;

  var top = document.getElementById('bubble').offsetTop;
  window.scrollTo(0, top);
  showdata();
}

function gotoPayment(bubble) {
  input += bubble;
  if (bubble === '0')
  {
    order += ' Add bubble';
    price = 30;
  }
  else if(bubble === '1')
  {
    order += ' Not Add bubble';
    price = 20;
  }
  document.getElementById("Add").disabled = true;
  document.getElementById("NotAdd").disabled = true;
  document.getElementById("cancel3").disabled = true;

  document.getElementById("cancel4").disabled = false;

  document.getElementById("priceElement").innerHTML = price;
  document.getElementById("currentPriceElement").innerHTML = price;
  
  var top = document.getElementById('payment').offsetTop;
  window.scrollTo(0, top);
  showdata();
}

function cancel(r) {
  input = '';
  order = '';
  price = 0;
  imgorder = '';
  i = 0;
  accept = 0;

  document.getElementById("order").innerHTML = '';
  init();
}

function pay(c)
{
  input += c;
  showdata();
  if (price > 0)
  {
    price -= 10;
    document.getElementById("currentPriceElement").innerHTML = price;
    if (price === 0)
    {
      orderSuccess();
    }
  }
}

function orderSuccess()
{
  showdata();
  document.getElementById('imageorder').setAttribute("src",imgorder);
  document.getElementById('cancel4').setAttribute("value",'New Order');
  document.getElementById("order").innerHTML = order;
  var top = document.getElementById('cancel4').offsetTop;
  window.scrollTo(0, top);
}

function neworder()
{
  document.getElementById('cancel4').setAttribute("value",'Cancel');
  cancel('r');
}

function compute()
{
  $(':input').prop('disabled',true);
  var next = document.getElementById("next");
  next.disabled = false;
  next.innerHTML = "NEXT";
  next.removeAttribute('onclick');
  initial();
}

function showdata()
{
  document.getElementById("tag5").innerHTML = input;
}

function showinput()
{
  var front = ''
  for (let n=0; n<i; n++)
  {
    front += input.charAt(n);
    console.log(front);
  }
  var after = ''
  for (let n=i+1; n < input.length; n++)
  {
    after += input.charAt(n);
    console.log(after);
  }
  document.getElementById("tag5").innerHTML = front + '<span style= \'color: red\'>' + input.charAt(i) + '</span>' + after;
}

function end()
{
  var next = document.getElementById("next");
  next.innerHTML = "RESET";
  next.setAttribute('onclick',"delend(); cancel()");
  next.style.backgroundColor = 'red';
  var result = document.getElementById("result");
  if (accept === 0)
  {
    result.innerHTML = "NOT ACCEPTED"
  }
  else if (accept === 1)
  {
    result.innerHTML = "ACCEPTED"
  }
}

function delend()
{
  var next = document.getElementById("next");
  next.innerHTML = "COMPUTE";
  next.setAttribute('onclick',"compute()");
  next.style.backgroundColor = '#97d4d7';
  delsecondten();
}

function initial()
{
  document.querySelector("#circle1").style.borderColor = 'red';
  var next = document.getElementById("next");
  if (i > 0)
  {
    showinput();
  }
  if (i < input.length)
  {
    if (input.charAt(i)==='0')
    {
      next.setAttribute('onclick',"delinitial(); milktea()");
    }
    else if (input.charAt(i)==='1')
    {
      next.setAttribute('onclick',"delinitial(); greentea()");
    }
    else if (input.charAt(i) === 'c' || input.charAt(i)=== 'r')
    {
      next.setAttribute('onclick',"delinitial(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function delinitial()
{
  document.querySelector("#circle1").style.borderColor = 'gray';
}

function milktea()
{
  document.querySelector("#circle2").style.borderColor = 'red';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i)==='0')
    {
      next.setAttribute('onclick',"delmilktea(); sugar100()");
    }
    else if (input.charAt(i)==='1')
    {
      next.setAttribute('onclick',"delmilktea(); sugar50()");
    }
    else if (input.charAt(i) === 'c')
    {
      next.setAttribute('onclick',"delmilktea(); milktea()");
    }
    else if (input.charAt(i) === 'r')
    {
      next.setAttribute('onclick',"delmilktea(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function delmilktea()
{
  document.querySelector("#circle2").style.borderColor = 'gray';
}

function greentea()
{
  document.querySelector("#circle6").style.borderColor = 'red';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i)==='0')
    {
      next.setAttribute('onclick',"delgreentea(); sugar100()");
    }
    else if (input.charAt(i)==='1')
    {
      next.setAttribute('onclick',"delgreentea(); sugar50()");
    }
    else if (input.charAt(i) === 'c')
    {
      next.setAttribute('onclick',"delgreentea(); greentea()");
    }
    else if (input.charAt(i) === 'r')
    {
      next.setAttribute('onclick',"delgreentea(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function delgreentea()
{
  document.querySelector("#circle6").style.borderColor = 'gray';
}

function sugar100()
{
  document.querySelector("#circle3").style.borderColor = 'red';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i)==='0')
    {
      next.setAttribute('onclick',"delsugar100(); add()");
    }
    else if (input.charAt(i)==='1')
    {
      next.setAttribute('onclick',"delsugar100(); notadd()");
    }
    else if (input.charAt(i) === 'c')
    {
      next.setAttribute('onclick',"delsugar100(); sugar100()");
    }
    else if (input.charAt(i) === 'r')
    {
      next.setAttribute('onclick',"delsugar100(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function delsugar100()
{
  document.querySelector("#circle3").style.borderColor = 'gray';
}

function sugar50()
{
  document.querySelector("#circle7").style.borderColor = 'red';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i)==='0')
    {
      next.setAttribute('onclick',"delsugar50(); add()");
    }
    else if (input.charAt(i)==='1')
    {
      next.setAttribute('onclick',"delsugar50(); notadd()");
    }
    else if (input.charAt(i) === 'c')
    {
      next.setAttribute('onclick',"delsugar50(); sugar50()");
    }
    else if (input.charAt(i) === 'r')
    {
      next.setAttribute('onclick',"delsugar50(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function delsugar50()
{
  document.querySelector("#circle7").style.borderColor = 'gray';
}

function add()
{
  document.querySelector("#circle4").style.borderColor = 'red';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i)==='0')
    {
      next.setAttribute('onclick',"deladd(); add()");
    }
    else if (input.charAt(i)==='1')
    {
      next.setAttribute('onclick',"deladd(); add()");
    }
    else if (input.charAt(i) === 'c')
    {
      next.setAttribute('onclick',"deladd(); tenaddbubble()");
    }
    else if (input.charAt(i) === 'r')
    {
      next.setAttribute('onclick',"deladd(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function deladd()
{
  document.querySelector("#circle4").style.borderColor = 'gray';
}

function notadd()
{
  document.querySelector("#circle8").style.borderColor = 'red';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i)==='0')
    {
      next.setAttribute('onclick',"delnotadd(); notadd()");
    }
    else if (input.charAt(i)==='1')
    {
      next.setAttribute('onclick',"delnotadd(); notadd()");
    }
    else if (input.charAt(i) === 'c')
    {
      next.setAttribute('onclick',"delnotadd(); firstten()");
    }
    else if (input.charAt(i) === 'r')
    {
      next.setAttribute('onclick',"delnotadd(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function delnotadd()
{
  document.querySelector("#circle8").style.borderColor = 'gray';
}

function tenaddbubble()
{
  document.querySelector("#circle5").style.borderColor = 'red';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i) === '0' || input.charAt(i)=== '1')
    {
      next.setAttribute('onclick',"deltenaddbubble(); tenaddbubble()");
    }
    else if (input.charAt(i) === 'c')
    {
      next.setAttribute('onclick',"deltenaddbubble(); firstten()");
    }
    else if (input.charAt(i) === 'r')
    {
      next.setAttribute('onclick',"deltenaddbubble(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function deltenaddbubble()
{
  document.querySelector("#circle5").style.borderColor = 'gray';
}

function firstten()
{
  document.querySelector("#circle9").style.borderColor = 'red';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i)==='0' || input.charAt(i)=== '1')
    {
      next.setAttribute('onclick',"delfirstten(); firstten()");
    }
    else if (input.charAt(i) === 'c')
    {
      next.setAttribute('onclick',"delfirstten(); secondten()");
    }
    else if (input.charAt(i) === 'r')
    {
      next.setAttribute('onclick',"delfirstten(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function delfirstten()
{
  document.querySelector("#circle9").style.borderColor = 'gray';
}

function secondten()
{
  accept = 1;
  document.querySelector("#final").style.border = '17px red double';
  var next = document.getElementById("next");
  showinput();
  if (i < input.length)
  {
    if (input.charAt(i)==='0' || input.charAt(i)=== '1' || input.charAt(i)=== 'c')
    {
      next.setAttribute('onclick',"delsecondten(); secondten()");
    }
    else if (input.charAt(i) === 'r')
    {
      accept = 0;
      next.setAttribute('onclick',"delsecondten(); initial()");
    }
  }
  else
  {
    end();
  } 
  i++;
}

function delsecondten(){
  document.querySelector("#final").style.border = '17px gray double';
}
