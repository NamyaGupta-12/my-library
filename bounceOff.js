function bounceOff(){
    if(isTouching()){
        movingrect.velocityX = movingrect.velocityX*(-1);
        fixedrect.velocityX = fixedrect.velocityX*(-1);
       
       }   
}
    