// const Engine=Matter.Engine
// const World=Matter.World
// const Bodies=Matter.Bodies
// var engine,world
var title,check
var check1,check2
var b, r,p,v
var check3
 var p1,p2,p3,p4
 var po
 var no
 var input1,input2,input3,input4
 var add
 var namee,pin,number
var submit
var cancelo,cancel
var place

function setup() {
 
  title=createElement("h1")
  title.html("Shoe center")
  title.position(400,100)
  check=createCheckbox()
  check.position(200,250)
  check1=createCheckbox()
  check1.position(200,300)
  check2=createCheckbox()
  check2.position(200,350)
check3=createCheckbox()
check3.position(200,400)
 b=createElement("h2")
 b.html("Bata shoes")
 b.position(250,230)
 r=createElement("h2")
 r.html("Reebok shoes")
 r.position(250,280)
 p=createElement("h2")
 p.html("Puma shoes")
 p.position(250,330)
 v=createElement("h2")
 v.html("Vans shoes")
 v.position(250,380)
  p1=createElement("h3")
  p1.html("Rs.900")
  p1.position(450,230)
  p2=createElement("h3")
  p2.html("Rs.1200")
  p2.position(450,280)
  p3=createElement("h3")
  p3.html("Rs.2000")
  p3.position(450,330)
  p4=createElement("h3")
  p4.html("Rs.2500")
  p4.position(450,380)
  po=createButton("Place Order")
  po.position(400,500)
  po.mousePressed(press)
  
}

function draw() {
  //Engine=engine.create()
  //world=engine.world
  
  
  
  drawSprites();
}
function press(){
 
  check.hide()
  title.hide()
  check1.hide()
  check2.hide()
  check3.hide()
  b.hide()
  v.hide()
  p.hide()
  r.hide()
po.hide()
p1.hide()
p2.hide()
p3.hide()
p4.hide()
add=createElement("h4")
add.html("Name: ")
add.position(350,50)
namee=createElement("h4")
namee.html("Address: ")
namee.position(350,100)
pin=createElement("h4")
pin.html("Pin code: ")
pin.position(350,150)
number=createElement("h4")
number.html("Contact No. ")
number.position(350,200)
input1=createInput()
input1.position(450,70)
input2=createInput()
input2.position(450,120)
input3=createInput()
input3.position(450,170)
input4=createInput()
input4.position(450,220)
submit=createButton("Submit")
submit.position(500,300)
submit.mousePressed(placeorder)
cancelo=createButton("Cancel order")
cancelo.position(300,300)
cancelo.mousePressed(cancelorder)
}
function placeorder(){
  place=alert("Your order has been successfully placed and will be delivered at your given adresss soon.")
}
function cancelorder(){
  cancel=alert("Sorry! We cant't cancel your order.")
}