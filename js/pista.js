let pista
const img=[]
let i=1

let x1=300
let y1=50
let vel1=1
let vuelta1=0
var izq1 = new Boolean(false);
var abj1 = new Boolean(false);

let x2=300
let y2=70
let vel2=1
let vuelta2=0
var izq2 = new Boolean(false);
var abj2 = new Boolean(false);

let x3=300
let y3=90
let vel3=1
let vuelta3=0
var izq3 = new Boolean(false);
var abj3 = new Boolean(false);

var ganador = new Boolean(false);







function preload()
{	
	pista= loadImage(`img/pista.jpg`)
	for (let i=1; i<4; i++) 
	{
		img[i] = loadImage(`img/carro${i}.png`) 
	}
}

const Paddle = function (){
	const draw = function(){
		image(pista,0,0, windowWidth, windowHeight)
		if(ganador!=true){

			vel1= random(15)
			vel2= random(15)
			vel3= random(15)
			
			
			if(x1<width-200 && izq1!=true){
				push()
				translate(x1+=vel1,y1)
				rotate(205.8)
				//rotate(9.5)

				image(img[1],0,0, 20, 20)
				pop()
			}else{
				if(y1<height-100 && abj1!=true){
					image(img[1],x1,y1+=vel1, 20, 20)
				}else{
					if(x1>100){
						push()
						translate(x1-=vel1,y1)
						rotate(89.5)

						image(img[1],0,0, 20, 20)
						pop()
						izq1=true
					}else{
						if(y1>100){
							push()
							translate(x1,y1-=vel1)
							rotate(9.5)

							image(img[1],0,0, 20, 20)
							pop()
							abj1=true
						}else{
							vuelta1++
							abj1=false
							izq1=false
						}
					}
				}			
			}

			if(x2<width-180 && izq2!=true){
				push()
				translate(x2+=vel2,y2)
				rotate(205.8)

				image(img[2],0,0, 20, 20)
				pop()
			}else{
				if(y2<height-100 && abj2!=true){
					image(img[2],x2,y2+=vel2, 20, 20)
				}else{
					if(x2>100){
						push()
						translate(x2-=vel2,y2)
						rotate(89.5)

						image(img[2],0,0, 20, 20)
						pop()
						
						izq2=true
					}else{
						if(y2>100){
							push()
							translate(x2,y2-=vel2)
							rotate(9.5)

							image(img[2],0,0, 20, 20)
							pop()
							abj2=true
						}else{
							vuelta2++
							abj2=false
							izq2=false
						}
					}
				}			
			}

			if(x3<width-170 && izq3!=true){
				push()
				translate(x3+=vel3,y3)
				rotate(205.8)

				image(img[3],0,0, 20, 20)
				pop()
			}else{
				if(y3<height-100 && abj3!=true){
					image(img[3],x3,y3+=vel3, 20, 20)
				}else{
					if(x3>100){
						push()
						translate(x3-=vel3,y3)
						rotate(89.5)

						image(img[3],0,0, 20, 20)
						pop()
						izq3=true
					}else{
						if(y3>100){
							push()
							translate(x3,y3-=vel3)
							rotate(9.5)

							image(img[3],0,0, 20, 20)
							pop()
							abj3=true
						}else{
							vuelta3++
							abj3=false
							izq3=false
						}
					}
				}			
			}
				

		}		

		


		text('Carro Verde', windowWidth-800, windowHeight-390);
		text('Carro Azul', windowWidth-800, windowHeight-360);
		text('Carro Rojo', windowWidth-800, windowHeight-330);

		text(vuelta1, windowWidth-620, windowHeight-390);
		text(vuelta2, windowWidth-620, windowHeight-360);
		text(vuelta3, windowWidth-620, windowHeight-330);

		if(vuelta1==3){
			ganador=true;
			textSize(32);
			text('GANA CARRO VERDE', 10, 30);

		}
		if (vuelta2==3) {
			ganador=true;
			textSize(32);
			text('GANA CARRO AZUL', 10, 30);
		}
		if(vuelta3==3){
			ganador=true;
			textSize(32);
			text('GANA CARRO ROJO', 10, 30);
		}

		//if(i===img.length)
		//	i=1


		
	}

	return{
		draw
		
	}


}